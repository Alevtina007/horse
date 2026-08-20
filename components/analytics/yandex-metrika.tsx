"use client";

import Script from "next/script";
import { useCookieConsent } from "@/lib/cookie-consent";

/**
 * Яндекс.Метрика.
 *
 * Что такое "счётчик" простыми словами: это идентификатор конкретного
 * сайта в системе Яндекс.Метрики. Подключая его на сайт, мы даём
 * Метрике знать, куда именно записывать статистику посещений — визиты,
 * клики, вебвизор (запись действий пользователя) и т.д.
 *
 * Правила подключения:
 * - Номер счётчика берём ТОЛЬКО из NEXT_PUBLIC_YM_ID. Если переменная
 *   не задана — компонент ничего не рендерит, сайт работает как обычно.
 * - Даже если номер задан, счётчик включаем только когда пользователь
 *   уже согласился на куки (см. lib/cookie-consent.ts). Без этого
 *   Метрика не должна ничего писать в браузер пользователя.
 * - Как только согласие появляется (баннер нажали "Принять") — счётчик
 *   подключается сразу же, без перезагрузки страницы, потому что этот
 *   компонент слушает событие COOKIE_CONSENT_EVENT и перерисовывается.
 */
export function YandexMetrika() {
  const counterId = process.env.NEXT_PUBLIC_YM_ID;

  // useCookieConsent сам следит за localStorage и за событием
  // COOKIE_CONSENT_EVENT (через useSyncExternalStore) — на сервере и
  // при первом рендере в браузере честно возвращает false, а как
  // только пользователь нажимает «Принять», компонент перерисуется
  // автоматически, без ручного useEffect + setState.
  const consentGranted = useCookieConsent();

  // Нет номера счётчика в окружении — Метрику вообще не подключаем.
  if (!counterId) return null;

  // Номер есть, но пользователь ещё не разрешил куки — тоже не подключаем.
  if (!consentGranted) return null;

  const id = Number(counterId);

  return (
    <>
      {/*
        Весь классический сниппет Метрики (определение window.ym,
        подгрузка tag.js, вызов init) оформлен как один inline-скрипт
        через next/script. strategy="afterInteractive" значит: скрипт
        выполнится после того, как страница уже стала интерактивной —
        то есть не будет тормозить первую отрисовку и загрузку сайта.
      */}
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${id}', 'ym');

          ym(${id}, 'init', {
              ssr:true,
              webvisor:true,
              clickmap:true,
              accurateTrackBounce:true,
              trackLinks:true,
              referrer: document.referrer,
              url: location.href
          });
        `}
      </Script>
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element -- пиксель для пользователей без JS, next/image тут не нужен */}
          <img
            src={`https://mc.yandex.ru/watch/${id}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
