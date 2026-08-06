import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Расскажите о себе",
    text: "Опишите опыт верховой езды, цели и бюджет — по телефону, в мессенджере или на встрече в конюшне.",
  },
  {
    number: "02",
    title: "Познакомьтесь с лошадьми",
    text: "Подберём несколько подходящих вариантов и организуем показ — вы сможете пообщаться и покататься.",
  },
  {
    number: "03",
    title: "Проверьте здоровье",
    text: "При желании организуем независимый ветеринарный осмотр — для полной уверенности перед покупкой.",
  },
  {
    number: "04",
    title: "Оформите и заберите",
    text: "Поможем с документами, перевозкой и первыми днями адаптации на новом месте.",
  },
] as const;

export function Process() {
  return (
    <section className="border-y border-border bg-muted/50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Как это происходит"
          title="Путь от знакомства до своей лошади"
          description="Прозрачный процесс без спешки — на каждом шаге вы принимаете решение осознанно."
          align="center"
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="reveal relative"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-serif text-4xl font-semibold text-primary/25">
                {step.number}
              </span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
