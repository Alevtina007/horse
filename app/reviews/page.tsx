import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { ReviewCard } from "@/components/review-card";
import { CtaBanner } from "@/components/cta-banner";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Отзывы",
  description:
    "Отзывы клиентов конюшни «Дикое Поле» о покупке лошадей, тренировках и содержании.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Отзывы"
        title="Истории наших клиентов"
        description="Настоящие впечатления людей, которые купили лошадь, занимаются или держат своих лошадей у нас."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <ReviewCard key={review.name} review={review} delay={i * 60} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Хотите оставить свою историю?"
        description="Будем рады узнать о вашем опыте — напишите нам, и мы добавим ваш отзыв."
      />
    </>
  );
}
