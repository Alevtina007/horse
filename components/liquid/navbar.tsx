"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#check', label: 'Check' },
  { href: '#discover', label: 'Discover' },
  { href: '#best-buys', label: 'Best Buys' },
  { href: '#brand-index', label: 'Brand Index' },
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How it works' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-serif text-[22px] font-semibold tracking-tight transition-opacity group-hover:opacity-70">
            LIQUID
          </span>
          <span className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
            Fashion value intelligence
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[13px] font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-5">
          <a
            href="#sign-in"
            className="hidden text-[13px] font-medium text-foreground/60 transition-colors hover:text-foreground lg:block"
          >
            Войти
          </a>
          <Link
            href="#check"
            className="bg-primary px-5 py-2.5 text-[13px] font-medium text-primary-foreground transition-all hover:bg-primary/85"
          >
            Проверить вещь
          </Link>

          {/* Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-border bg-background/98 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto max-w-7xl divide-y divide-border px-4">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block py-4 text-base font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
            <a
              href="#sign-in"
              onClick={() => setOpen(false)}
              className="block py-4 text-base font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              Войти
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
