/**
 * Небольшой типобезопасный хелпер для вызова window.ym(...) из любого
 * клиентского компонента (например, из формы заявки — чтобы отправить
 * цель "lead" после успешной отправки).
 *
 * Что такое "цель" (goal) простыми словами:
 * Счётчик Метрики сам по себе считает визиты и клики. Цель — это
 * именованное событие, которое мы сообщаем Метрике вручную в нужный
 * момент ("вот сейчас пользователь оставил заявку"). По целям потом
 * в интерфейсе Метрики строится воронка/конверсия: сколько людей
 * зашло на сайт и сколько из них реально оставило заявку.
 */

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

function getMetrikaCounterId(): string | undefined {
  return process.env.NEXT_PUBLIC_YM_ID;
}

/**
 * Отправляет цель в Яндекс.Метрику, если счётчик подключён и работает.
 * Безопасна для вызова всегда — если Метрики нет (нет ID, нет согласия
 * на куки, скрипт ещё не успел загрузиться), просто ничего не делает.
 */
export function reachGoal(goalName: string): void {
  if (typeof window === "undefined") return;

  const counterId = getMetrikaCounterId();
  if (!counterId || !window.ym) return;

  window.ym(Number(counterId), "reachGoal", goalName);
}
