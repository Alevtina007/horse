import { ArrowRight } from 'lucide-react';

const services = [
  {
    code: 'CHECK',
    title: 'Проверка одной вещи',
    price: '990 ₽',
    description: 'Пришлите ссылку — получите полный аналитический отчёт.',
    features: ['Анализ цены vs рынок', 'LIQUID SCORE 0–100', 'Прогноз стоимости перепродажи', 'Финальная рекомендация'],
    highlight: false,
  },
  {
    code: 'FIND',
    title: 'Найти выгоднее',
    price: 'от 1 490 ₽',
    description: 'Мы ищем ту же модель или достойную альтернативу по лучшей цене.',
    features: ['Retail-платформы', 'Ресейл-площадки', 'Зарубежные маркеты', 'Мониторинг распродаж'],
    highlight: false,
  },
  {
    code: 'SELECT',
    title: 'Что купить на мой бюджет',
    price: 'от 3 900 ₽',
    description: 'Персональная подборка с максимальным retention под ваш бюджет.',
    features: ['Подбор по бюджету', 'Несколько вариантов', 'LIQUID SCORE каждого', 'Сравнительная таблица'],
    highlight: true,
  },
  {
    code: 'PRIVATE',
    title: 'Private Shopping',
    price: 'от 7 900 ₽',
    description: 'Персональный luxury-шопинг с учётом стиля, бренда и будущей стоимости.',
    features: ['Персональный консультант', 'Анализ всего гардероба', 'Поиск и торг за вас', 'Прогноз портфеля'],
    highlight: false,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="reveal mb-16">
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight">
            Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            Выберите формат работы с LIQUID
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.code}
              className={`reveal group flex flex-col border transition-all hover:shadow-xl ${
                s.highlight
                  ? 'border-foreground bg-foreground text-primary-foreground'
                  : 'border-border bg-card'
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Header */}
              <div className={`border-b p-6 ${s.highlight ? 'border-white/10' : 'border-border'}`}>
                <div className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${s.highlight ? 'text-white/50' : 'text-muted-foreground'}`}>
                  {s.code}
                </div>
                <h3 className="font-serif text-lg font-semibold leading-tight">{s.title}</h3>
                <div className={`mt-4 font-serif text-3xl font-bold`}>{s.price}</div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className={`text-sm leading-relaxed mb-6 ${s.highlight ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {s.description}
                </p>

                <ul className="flex-1 space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-[13px] ${s.highlight ? 'text-white/80' : ''}`}>
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 ${s.highlight ? 'bg-white/50' : 'bg-foreground/40'}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#check"
                  className={`group/btn mt-8 flex items-center justify-between text-sm font-medium transition-all ${
                    s.highlight
                      ? 'text-white hover:text-white/70'
                      : 'text-foreground hover:text-foreground/70'
                  }`}
                >
                  Заказать
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
