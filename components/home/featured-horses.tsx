import { ArrowRight } from "lucide-react";
import { horses } from "@/data/horses";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { HorseCard } from "@/components/horse-card";
import { Button } from "@/components/ui/button";

export function FeaturedHorses() {
  const featured = horses.slice(0, 3);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Лошади на продажу"
            title="Познакомьтесь с нашими лошадьми"
            description="Несколько лошадей, которые сейчас ищут новых хозяев. Полный список — на странице услуг и цен."
          />
          <Button
            href="/services"
            variant="ghost"
            className="reveal hidden shrink-0 sm:inline-flex"
          >
            Все лошади и услуги
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((horse, i) => (
            <HorseCard key={horse.id} horse={horse} delay={i * 80} />
          ))}
        </div>

        <div className="mt-8 flex sm:hidden">
          <Button href="/services" variant="outline" className="w-full">
            Все лошади и услуги
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
