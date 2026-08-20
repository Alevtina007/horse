import { NextResponse } from "next/server";

/**
 * POST /api/lead
 *
 * Что делает этот файл (простыми словами):
 * 1. Получает данные формы заявки (имя, контакт, комментарий) из браузера.
 * 2. Ещё раз проверяет их на сервере — потому что клиентской проверке
 *    доверять нельзя, запрос можно отправить и мимо формы.
 * 3. Берёт секретные данные (токен ВКонтакте и т.п.) ТОЛЬКО из переменных
 *    окружения на сервере — они никогда не попадают в код и не уходят
 *    в браузер пользователя.
 * 4. Формирует текст сообщения и отправляет его в ВК через
 *    messages.send — как будто вы сами написали себе сообщение от
 *    имени сообщества/пользователя, которому принадлежит токен.
 * 5. Возвращает браузеру только { ok: true } или { ok: false, error },
 *    без технических подробностей и уж тем более без токена.
 *
 * Этот файл выполняется только на сервере (в Node.js), никогда в
 * браузере, поэтому в нём безопасно читать process.env с секретами.
 */

// Next.js не должен пытаться кэшировать/предрендерить этот роут статически —
// это обработчик запроса, а не источник статических данных.
export const dynamic = "force-dynamic";

interface LeadPayload {
  name?: unknown;
  contact?: unknown;
  comment?: unknown;
}

interface ValidatedLead {
  name: string;
  contact: string;
  comment: string;
}

/** Итог валидации: либо готовые данные, либо человекочитаемая ошибка. */
type ValidationResult =
  | { ok: true; data: ValidatedLead }
  | { ok: false; error: string };

function validateLead(payload: LeadPayload): ValidationResult {
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const contact =
    typeof payload.contact === "string" ? payload.contact.trim() : "";
  const comment =
    typeof payload.comment === "string" ? payload.comment.trim() : "";

  if (name.length < 2) {
    return { ok: false, error: "Укажите имя (минимум 2 символа)." };
  }

  if (contact.length === 0) {
    return {
      ok: false,
      error: "Укажите телефон или ссылку на соцсеть для связи.",
    };
  }

  // Разумный верхний предел длины: обычная форма столько не введёт,
  // но защищаемся и от прямых запросов к API в обход формы.
  if (name.length > 200 || contact.length > 300 || comment.length > 2000) {
    return { ok: false, error: "Слишком длинный текст в одном из полей." };
  }

  return { ok: true, data: { name, contact, comment } };
}

function buildMessageText(lead: ValidatedLead): string {
  const lines = [
    "🔔 Новая заявка с сайта LIQUID",
    "",
    `Имя: ${lead.name}`,
    `Контакт: ${lead.contact}`,
  ];

  if (lead.comment) {
    lines.push(`Комментарий: ${lead.comment}`);
  }

  return lines.join("\n");
}

/** Случайное число, чтобы ВК не задваивал сообщения при повторной отправке. */
function generateRandomId(): number {
  return Date.now() * 1000 + Math.floor(Math.random() * 1000);
}

export async function POST(request: Request) {
  // 1. Читаем и разбираем тело запроса.
  let payload: LeadPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Некорректный формат запроса." },
      { status: 400 },
    );
  }

  // 2. Валидация на сервере (не доверяем клиенту).
  const validation = validateLead(payload);
  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, error: validation.error },
      { status: 400 },
    );
  }

  // 3. Секреты — строго из переменных окружения, никогда не хардкодим.
  const accessToken = process.env.VK_ACCESS_TOKEN;
  const peerId = process.env.VK_PEER_ID;
  const apiVersion = process.env.VK_API_VERSION || "5.199";

  if (!accessToken || !peerId) {
    // Логируем сам факт проблемы конфигурации, но НИКОГДА не логируем
    // значения секретов (тут их и не читаем — только проверяем наличие).
    console.error(
      "[/api/lead] VK_ACCESS_TOKEN или VK_PEER_ID не заданы в окружении. " +
        "Форма заявок не может отправлять сообщения в ВК.",
    );
    return NextResponse.json(
      { ok: false, error: "Форма временно недоступна. Попробуйте позже." },
      { status: 503 },
    );
  }

  const message = buildMessageText(validation.data);

  // 4. Отправляем сообщение в ВК через messages.send.
  const params = new URLSearchParams({
    access_token: accessToken,
    peer_id: peerId,
    message,
    v: apiVersion,
    random_id: String(generateRandomId()),
  });

  let vkResponse: Response;
  try {
    vkResponse = await fetch("https://api.vk.com/method/messages.send", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
  } catch (error) {
    console.error(
      "[/api/lead] Сетевая ошибка при обращении к VK API:",
      error instanceof Error ? error.message : error,
    );
    return NextResponse.json(
      { ok: false, error: "Не удалось отправить заявку. Попробуйте позже." },
      { status: 502 },
    );
  }

  // ВК почти всегда отвечает HTTP 200, даже если внутри есть ошибка —
  // поэтому проверяем и response.ok, и data.error отдельно.
  let data: unknown;
  try {
    data = await vkResponse.json();
  } catch {
    console.error(
      "[/api/lead] VK API вернул не-JSON ответ, статус:",
      vkResponse.status,
    );
    return NextResponse.json(
      { ok: false, error: "Не удалось отправить заявку. Попробуйте позже." },
      { status: 502 },
    );
  }

  const vkError =
    typeof data === "object" && data !== null && "error" in data
      ? (data as { error?: { error_msg?: string; error_code?: number } })
          .error
      : undefined;

  if (!vkResponse.ok || vkError) {
    console.error(
      "[/api/lead] VK API сообщил об ошибке:",
      vkError
        ? `code=${vkError.error_code} msg=${vkError.error_msg}`
        : `HTTP ${vkResponse.status}`,
    );
    return NextResponse.json(
      { ok: false, error: "Не удалось отправить заявку. Попробуйте позже." },
      { status: 502 },
    );
  }

  // Успех — в логах оставляем только текст заявки (не секреты), чтобы
  // можно было на сервере проверить, что заявка действительно ушла.
  console.log(
    "[/api/lead] Заявка отправлена в ВК:",
    message.replace(/\n/g, " | "),
  );

  return NextResponse.json({ ok: true }, { status: 200 });
}
