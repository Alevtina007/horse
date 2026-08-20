import { useSyncExternalStore } from "react";

/**
 * Общая точка правды про согласие на куки.
 *
 * Что тут происходит простыми словами:
 * - Согласие храним в localStorage браузера под одним и тем же ключом.
 * - Баннер с кнопкой «Принять» пишет туда значение "granted".
 * - Яндекс.Метрика (и в будущем — любая другая аналитика) перед запуском
 *   спрашивает через isCookieConsentGranted(), можно ли включаться.
 * - Чтобы Метрика подключилась СРАЗУ после нажатия «Принять» (без
 *   перезагрузки страницы), баннер после записи в localStorage ещё и
 *   рассылает кастомное браузерное событие "cookie-consent-change" —
 *   компонент Метрики его слушает и включается на лету.
 */

export const COOKIE_CONSENT_STORAGE_KEY = "liquid:cookie-consent";
export const COOKIE_CONSENT_GRANTED_VALUE = "granted";

/** Название кастомного DOM-события, которое рассылается при изменении согласия. */
export const COOKIE_CONSENT_EVENT = "cookie-consent-change";

/**
 * Читает текущее согласие из localStorage.
 * Безопасно вызывать и на сервере — там просто вернёт false.
 */
export function isCookieConsentGranted(): boolean {
  if (typeof window === "undefined") return false;

  try {
    return (
      window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY) ===
      COOKIE_CONSENT_GRANTED_VALUE
    );
  } catch {
    // localStorage может быть недоступен (приватный режим, ограничения
    // браузера) — в этом случае просто считаем, что согласия нет.
    return false;
  }
}

function subscribeToCookieConsent(callback: () => void): () => void {
  window.addEventListener(COOKIE_CONSENT_EVENT, callback);
  return () => window.removeEventListener(COOKIE_CONSENT_EVENT, callback);
}

function getServerCookieConsentSnapshot(): boolean {
  // На сервере localStorage не существует, поэтому всегда false —
  // реальное значение подставится в браузере после гидратации.
  return false;
}

/**
 * React-хук: актуальное состояние согласия на куки, которое само
 * обновляется при вызове grantCookieConsent() — без ручных useEffect +
 * setState в компонентах (используем useSyncExternalStore, он для
 * подписки на внешние источники состояния и предназначен).
 */
export function useCookieConsent(): boolean {
  return useSyncExternalStore(
    subscribeToCookieConsent,
    isCookieConsentGranted,
    getServerCookieConsentSnapshot,
  );
}

/**
 * Сохраняет согласие пользователя и оповещает остальную часть страницы
 * об изменении — без перезагрузки.
 */
export function grantCookieConsent(): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(
      COOKIE_CONSENT_STORAGE_KEY,
      COOKIE_CONSENT_GRANTED_VALUE,
    );
  } catch {
    // Если localStorage недоступен — согласие просто не переживёт
    // перезагрузку страницы, но в рамках текущей сессии событие всё
    // равно разошлём, чтобы аналитика подключилась.
  }

  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}
