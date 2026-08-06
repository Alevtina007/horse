import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { HorseCard } from "@/components/horse-card";
import { ServiceGroupCard } from "@/components/services/service-group";
import { CtaBanner } from "@/components/cta-banner";
import { horses } from "@/data/horses";
import { serviceGroups } from "@/data/services";

export const metadata: Metadata = {
  title: "Услуги и цены",
  description:
    "Каталог лошадей на продажу, тренировки, пансион и ветеринарное сопровождение конюшни «Дикое Поле».",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Услуги и цены"
        title="Лошади и услуги для всадников"
        description="Продажа лошадей, обучение, пансион и уход — прозрачные цены и честный подход на каждом этапе."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Каталог"
            title="Лошади, которые сейчас доступны"
            description="Актуальный список лошадей на продажу. Цены могут уточняться после осмотра и оценки состояния."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {horses.map((horse, i) => (
              <HorseCard key={horse.id} horse={horse} delay={i * 60} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-muted/50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Прайс-лист"
            title="Услуги конюшни"
            description="От разового занятия до полного пансиона — выберите то, что подходит именно вам."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {serviceGroups.map((group, i) => (
              <ServiceGroupCard key={group.id} group={group} delay={i * 80} />
            ))}
          </div>
          <p className="reveal mt-8 text-sm text-muted-foreground">
            Цены ориентировочные и могут отличаться в зависимости от условий.
            Точную стоимость назовём после консультации.
          </p>
        </Container>
      </section>

      <CtaBanner
        title="Не нашли то, что искали?"
        description="Расскажите, какая лошадь или услуга вам нужна — подберём индивидуальное решение."
      />
    </>
  );
}
