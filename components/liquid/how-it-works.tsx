import { Send, LineChart, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Send,
    title: 'Пришлите вещь',
    description: 'Отправьте нам ссылку на товар или загрузите фото вещи, которую планируете купить.',
  },
  {
    number: '02',
    icon: LineChart,
    title: 'LIQUID анализирует рынок',
    description: 'Мы изучаем тысячи объявлений, динамику цен, спрос и историю продаж похожих вещей.',
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'Получите решение до покупки',
    description: 'Вы получаете полный отчёт с LIQUID SCORE, прогнозом стоимости и рекомендацией.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="reveal mb-20 text-center">
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight">
            Как это работает
          </h2>
          <p className="mt-4 text-muted-foreground">
            3 простых шага до умной покупки
          </p>
        </div>

        <div className="relative grid gap-6 lg:grid-cols-3 lg:gap-0">
          {/* Connector line (desktop) */}
          <div className="absolute top-10 left-0 right-0 hidden h-px bg-border lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="reveal relative px-0 lg:px-8"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Number */}
                <div className="relative z-10 mb-8 flex h-20 w-20 items-center justify-center border border-border bg-background font-serif text-2xl font-bold">
                  {step.number}
                </div>

                <Icon className="h-8 w-8 text-accent mb-5" strokeWidth={1.5} />

                <h3 className="font-serif text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="reveal mt-20 flex justify-center" style={{ animationDelay: '0.4s' }}>
          <a
            href="#check"
            className="group inline-flex items-center gap-2.5 bg-primary px-10 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-all hover:bg-primary/90"
          >
            Попробовать сейчас
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
