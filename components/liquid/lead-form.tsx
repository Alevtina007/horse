"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

/**
 * Форма заявки. Отправляет данные на наш собственный серверный роут
 * /api/lead (см. app/api/lead/route.ts), который уже сам, на сервере,
 * пересылает заявку в личные сообщения ВКонтакте. Токен ВК форма
 * никогда не видит — он есть только на сервере.
 */

type Status = "idle" | "submitting" | "success" | "error";

interface FormValues {
  name: string;
  contact: string;
  comment: string;
}

const initialValues: FormValues = { name: "", contact: "", comment: "" };

function validate(values: FormValues): string | null {
  if (values.name.trim().length < 2) {
    return "Укажите имя (минимум 2 символа).";
  }
  if (values.contact.trim().length === 0) {
    return "Укажите телефон или ссылку на соцсеть для связи.";
  }
  return null;
}

export function LeadForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const isSubmitting = status === "submitting";

  function updateField<K extends keyof FormValues>(field: K, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Как только пользователь начинает править форму после ошибки —
    // убираем сообщение об ошибке, чтобы не сбивать с толку.
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationError = validate(values);
    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data: { ok: boolean; error?: string } = await response.json();

      if (!response.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Не удалось отправить заявку. Попробуйте позже.");
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setErrorMessage("Проблема с подключением. Проверьте интернет и попробуйте ещё раз.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Имя */}
      <div>
        <label htmlFor="lead-name" className="mb-2 block text-[12px] uppercase tracking-widest text-white/40">
          Имя *
        </label>
        <input
          id="lead-name"
          type="text"
          value={values.name}
          onChange={(e) => updateField("name", e.target.value)}
          disabled={isSubmitting}
          placeholder="Как к вам обращаться"
          className="w-full border border-white/10 bg-white/5 py-4 px-4 text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-white/40 disabled:opacity-50"
        />
      </div>

      {/* Контакт */}
      <div>
        <label htmlFor="lead-contact" className="mb-2 block text-[12px] uppercase tracking-widest text-white/40">
          Телефон или ссылка на соцсеть *
        </label>
        <input
          id="lead-contact"
          type="text"
          value={values.contact}
          onChange={(e) => updateField("contact", e.target.value)}
          disabled={isSubmitting}
          placeholder="+7 900 000-00-00 или t.me/username"
          className="w-full border border-white/10 bg-white/5 py-4 px-4 text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-white/40 disabled:opacity-50"
        />
      </div>

      {/* Комментарий */}
      <div>
        <label htmlFor="lead-comment" className="mb-2 block text-[12px] uppercase tracking-widest text-white/40">
          Комментарий
        </label>
        <textarea
          id="lead-comment"
          value={values.comment}
          onChange={(e) => updateField("comment", e.target.value)}
          disabled={isSubmitting}
          rows={4}
          placeholder="Что хотите проверить или купить"
          className="w-full resize-none border border-white/10 bg-white/5 py-4 px-4 text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-white/40 disabled:opacity-50"
        />
      </div>

      {/* Кнопка отправки + статус */}
      <div className="space-y-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group flex w-full items-center justify-center gap-2 bg-[#2f6bff] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#4d80ff] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Отправляем…
            </>
          ) : (
            "Отправить заявку"
          )}
        </button>

        {status === "success" && (
          <div className="flex items-center gap-2 border border-[#16a34a]/30 bg-[#16a34a]/10 px-4 py-3 text-sm text-[#4ade80]">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            Спасибо, заявка отправлена
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 border border-[#ea580c]/30 bg-[#ea580c]/10 px-4 py-3 text-sm text-[#fb923c]">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {errorMessage}
          </div>
        )}
      </div>
    </form>
  );
}
