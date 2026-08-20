"use client";

import { Cookie } from "lucide-react";
import { grantCookieConsent, useCookieConsent } from "@/lib/cookie-consent";

/**
 * Баннер согласия на использование куки.
 *
 * Зачем он вообще нужен простыми словами: аналитика (Яндекс.Метрика)
 * использует куки и localStorage, чтобы узнавать браузер посетителя
 * между визитами. По закону и по правилам приличия сайт должен сначала
 * спросить разрешение и запускать такие системы только после явного
 * согласия — этот баннер и есть та самая точка согласия.
 *
 * Когда пользователь нажимает «Принять», компонент вызывает
 * grantCookieConsent() (см. lib/cookie-consent.ts), которая:
 * 1. Сохраняет согласие в localStorage — чтобы баннер не показывался
 *    повторно при следующих визитах.
 * 2. Рассылает браузерное событие, которое слушает компонент
 *    <YandexMetrika /> и сразу включает счётчик — без перезагрузки
 *    страницы.
 */
export function CookieBanner() {
  // useCookieConsent на сервере и при первом клиентском рендере честно
  // возвращает false (согласия ещё нет) — баннер показывается. После
  // нажатия «Принять» состояние обновится само, без ручного useEffect.
  const consentGranted = useCookieConsent();

  function handleAccept() {
    grantCookieConsent();
  }

  if (consentGranted) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Уведомление об использовании куки"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-[#0d1b2e]/95 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-start gap-3">
          <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-white/50" />
          <p className="text-sm leading-relaxed text-white/70">
            Мы используем куки для аналитики и улучшения работы сайта.
            Продолжая пользоваться сайтом, вы соглашаетесь с этим.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAccept}
          className="shrink-0 bg-[#2f6bff] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#4d80ff]"
        >
          Принять
        </button>
      </div>
    </div>
  );
}
