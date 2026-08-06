"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Watches all elements with the `.reveal` class and adds `.in-view`
 * once they scroll into the viewport, powering the fade/slide-up animation
 * defined in globals.css. Mount once near the root layout; re-scans on
 * every route change since the App Router keeps this component mounted.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    const timer = window.setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => {
        observer.observe(el);
      });
    }, 50);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
