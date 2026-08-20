import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { HeroAnalysisCard } from './hero-analysis-card';

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#16213e0a_1px,transparent_1px),linear-gradient(to_bottom,#16213e0a_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-screen items-center gap-12 lg:grid-cols-2 lg:gap-20 pt-24 pb-20">

          {/* ── Left: Copy ── */}
          <div className="reveal">
            {/* Eyebrow */}
            <div className="mb-8 inline-flex items-center gap-2 border border-border bg-card px-4 py-2">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Fashion Value Intelligence
              </span>
            </div>

            <h1 className="font-serif text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight">
              Покупайте вещи,{' '}
              <em className="not-italic text-accent">которые</em>{' '}
              сохраняют ценность.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
              LIQUID анализирует цену, спрос и потенциал перепродажи fashion&#8209;
              и luxury&#8209;вещей&nbsp;— до того, как вы их купите.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/check"
                className="group inline-flex items-center gap-2.5 bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-all hover:bg-primary/90"
              >
                Проверить вещь
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/discover"
                className="inline-flex items-center gap-2.5 border border-border bg-transparent px-8 py-4 text-sm font-medium tracking-wide transition-all hover:bg-muted"
              >
                Найти выгодную покупку
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-10">
              {[
                { value: '12K+', label: 'Analyzed pieces' },
                { value: '87%', label: 'Avg. retention' },
                { value: '4.8★', label: 'Client rating' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl font-semibold">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Analysis Card ── */}
          <div className="reveal lg:pl-8" style={{ animationDelay: '0.18s' }}>
            <HeroAnalysisCard />
          </div>
        </div>
      </div>
    </section>
  );
}
