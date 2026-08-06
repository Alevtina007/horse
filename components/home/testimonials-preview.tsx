import { ArrowRight } from "lucide-react";
import { reviews } from "@/data/reviews";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ReviewCard } from "@/components/review-card";
import { Button } from "@/components/ui/button";

export function TestimonialsPreview() {
  const preview = reviews.slice(0, 3);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Отзывы"
          title="Что говорят те, кто уже с нами"
          description="Истории клиентов — от первой встречи с лошадью до долгих лет партнёрства."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((review, i) => (
            <ReviewCard key={review.name} review={review} delay={i * 80} />
          ))}
        </div>

        <div className="reveal mt-10 flex justify-center">
          <Button href="/reviews" variant="ghost">
            Все отзывы
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
