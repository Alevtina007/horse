"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: "", phone: "", message: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Введите имя (минимум 2 буквы)";
  }

  const phoneDigits = values.phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    errors.phone = "Введите корректный номер телефона";
  }

  if (values.message.trim().length < 5) {
    errors.message = "Расскажите чуть подробнее — хотя бы пару слов";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      // UI-only form: no data is sent anywhere. We simply show a
      // friendly confirmation state for now.
      setSubmitted(true);
    }
  }

  function handleReset() {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className="reveal flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/15 text-secondary">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
          Спасибо, заявка принята!
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Мы свяжемся с вами в ближайшее время. А пока можете полистать наших
          лошадей или почитать отзывы.
        </p>
        <Button variant="outline" size="sm" className="mt-6" onClick={handleReset}>
          Отправить ещё одну заявку
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="reveal flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Как вас зовут
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Ваше имя"
          className={cn(
            "w-full rounded-xl border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary",
            errors.name ? "border-red-400" : "border-border",
          )}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Телефон
        </label>
        <input
          id="phone"
          type="tel"
          value={values.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="+7 (___) ___-__-__"
          className={cn(
            "w-full rounded-xl border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary",
            errors.phone ? "border-red-400" : "border-border",
          )}
        />
        {errors.phone && (
          <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Сообщение
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Расскажите, что вас интересует: покупка лошади, тренировки или пансион"
          className={cn(
            "w-full resize-none rounded-xl border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary",
            errors.message ? "border-red-400" : "border-border",
          )}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="mt-2 w-full">
        Отправить заявку
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Нажимая кнопку, вы соглашаетесь на обработку данных для связи с вами.
      </p>
    </form>
  );
}
