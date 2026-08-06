import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { CtaBanner } from "@/components/cta-banner";
import { aboutMe } from "@/data/about";

export const metadata: Metadata = {
  title: "Обо мне",
  description:
    "Екатерина Волкова — основательница конюшни «Дикое Поле», тренер по конному спорту с 14-летним опытом.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Обо мне"
        title={aboutMe.name}
        description={aboutMe.role}
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="reveal space-y-5">
            {aboutMe.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="reveal aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border bg-[linear-gradient(160deg,color-mix(in_srgb,var(--secondary)_35%,transparent),color-mix(in_srgb,var(--primary)_30%,transparent))]">
            <div className="flex h-full items-end p-8">
              <p className="font-serif text-xl font-semibold text-primary-foreground drop-shadow">
                {aboutMe.name}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-muted/50 py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {aboutMe.facts.map((fact, i) => (
              <div
                key={fact.label}
                className="reveal text-center"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <p className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
                  {fact.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <h2 className="reveal font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Чем я руководствуюсь
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {aboutMe.values.map((value, i) => (
              <div
                key={value.title}
                className="reveal rounded-2xl border border-border bg-card p-6"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Хотите познакомиться лично?"
        description="Приезжайте в конюшню — покажу лошадей, расскажу о хозяйстве и отвечу на все вопросы."
      />
    </>
  );
}
