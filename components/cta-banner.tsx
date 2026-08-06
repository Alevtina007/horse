import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function CtaBanner({
  title = "Готовы найти своего коня?",
  description = "Расскажите о своих целях — подберём лошадь или услугу, которая подойдёт именно вам.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="reveal relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,color-mix(in_srgb,var(--secondary)_45%,transparent),transparent_50%),radial-gradient(circle_at_90%_85%,color-mix(in_srgb,var(--accent)_45%,transparent),transparent_45%)]"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-xl font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/85">
              {description}
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                href="/contacts"
                size="lg"
                className="bg-background text-foreground hover:brightness-95"
              >
                {siteConfig.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
