import { Heart, Leaf, Medal, Users } from "lucide-react";
import { Container } from "@/components/ui/container";

const highlights = [
  {
    icon: Heart,
    title: "Забота, а не конвейер",
    text: "Каждая лошадь у нас — не товар, а партнёр. Знаем характер, привычки и историю каждой.",
  },
  {
    icon: Medal,
    title: "Опыт в спорте",
    text: "14 лет в конном спорте: подготовка лошадей для конкура, выездки и прогулочной езды.",
  },
  {
    icon: Leaf,
    title: "Природное содержание",
    text: "Просторные левады, чистый воздух предгорий, натуральный рацион — без спешки и стресса.",
  },
  {
    icon: Users,
    title: "Честное сопровождение",
    text: "Помогаем на всех этапах: от подбора и осмотра до документов и адаптации после покупки.",
  },
] as const;

export function Highlights() {
  return (
    <section className="py-4 sm:py-8">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="reveal rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
