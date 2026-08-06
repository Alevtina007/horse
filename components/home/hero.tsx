import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_srgb,var(--secondary)_18%,transparent),transparent_55%),radial-gradient(circle_at_85%_10%,color-mix(in_srgb,var(--accent)_22%,transparent),transparent_45%)]"
      />
      <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {siteConfig.tagline}
          </span>

          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl lg:text-[3.4rem]">
            Найдите своего коня среди простора и тишины
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Продаём проверенных лошадей для спорта и души, обучаем верховой
            езде и заботимся о содержании — честно, бережно, без спешки.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contacts" size="lg">
              {siteConfig.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Услуги и цены
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
            <ShieldCheck className="h-5 w-5 shrink-0 text-secondary" />
            <span>
              Ветеринарная проверка и честная история каждой лошади — прежде
              чем она станет вашей.
            </span>
          </div>
        </div>

        <div className="reveal relative aspect-[4/5] w-full max-w-md justify-self-center overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl lg:justify-self-end">
          <div className="absolute inset-0 bg-[linear-gradient(160deg,color-mix(in_srgb,var(--secondary)_35%,transparent),color-mix(in_srgb,var(--primary)_30%,transparent))]" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <p className="font-serif text-2xl font-semibold text-primary-foreground drop-shadow">
              «Дикое Поле»
            </p>
            <p className="mt-2 text-sm text-primary-foreground/90 drop-shadow">
              Конюшня среди степи и предгорий — 14 лет с лошадьми
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
