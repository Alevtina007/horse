const metrics = [
  { name: 'Resale Demand',   value: 92, desc: 'Востребованность на вторичном рынке' },
  { name: 'Price Stability', value: 88, desc: 'Стабильность цены за 12 месяцев' },
  { name: 'Brand Demand',    value: 95, desc: 'Сила бренда на глобальном рынке' },
  { name: 'Market Supply',   value: 72, desc: 'Предложение (меньше = лучше)' },
  { name: 'Selling Speed',   value: 84, desc: 'Скорость продажи похожих вещей' },
  { name: 'Value Retention', value: 89, desc: 'Сохранение стоимости через год' },
];

const SCORE = 86;
const CIRCUMFERENCE = 2 * Math.PI * 88; // r=88

export function LiquidScore() {
  return (
    <section id="discover" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="reveal mb-16 text-center">
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight">
            LIQUID SCORE
          </h2>
          <p className="mt-4 text-muted-foreground">
            Комплексная оценка ликвидности и инвестиционной привлекательности
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">

          {/* ── Gauge ── */}
          <div className="reveal">
            <div className="border border-border bg-card p-10 text-center">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-8">
                Пример — Chanel Classic Flap Medium
              </div>

              {/* SVG dial */}
              <div className="relative mx-auto w-52">
                <svg viewBox="0 0 200 200" className="-rotate-90">
                  <circle cx="100" cy="100" r="88" fill="none" stroke="#e5e5e5" strokeWidth="8" />
                  <circle
                    cx="100" cy="100" r="88" fill="none"
                    stroke="#16a34a" strokeWidth="8" strokeLinecap="round"
                    strokeDasharray={`${(SCORE / 100) * CIRCUMFERENCE} ${CIRCUMFERENCE}`}
                    style={{ transition: 'stroke-dasharray 1.4s cubic-bezier(.4,0,.2,1)' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="font-serif text-6xl font-bold leading-none">{SCORE}</div>
                  <div className="mt-1 text-sm text-muted-foreground">/ 100</div>
                </div>
              </div>

              {/* Verdict */}
              <div className="mt-8 inline-block border-l-2 border-[#16a34a] pl-5 text-left">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Вердикт</div>
                <div className="mt-0.5 text-xl font-bold text-[#16a34a]">STRONG BUY</div>
              </div>

              {/* Context pills */}
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {['87% retention', '14–30 дн. продажа', 'Высокий спрос'].map((t) => (
                  <span key={t} className="border border-border bg-muted/50 px-3 py-1.5 text-[11px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Metrics ── */}
          <div className="reveal space-y-3" style={{ animationDelay: '0.15s' }}>
            {metrics.map((m, i) => (
              <div
                key={m.name}
                className="group relative border border-border bg-card p-5 transition-all hover:border-foreground/30 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between mb-2.5">
                      <span className="text-sm font-medium">{m.name}</span>
                      <span className="font-serif text-xl font-bold">{m.value}</span>
                    </div>
                    {/* Bar */}
                    <div className="h-1.5 overflow-hidden bg-muted">
                      <div
                        className="h-full bg-foreground transition-all duration-1000"
                        style={{ width: `${m.value}%`, transitionDelay: `${i * 80}ms` }}
                      />
                    </div>
                    {/* Tooltip description */}
                    <div className="mt-2 text-[11px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                      {m.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Verdicts legend */}
            <div className="mt-4 border border-border bg-muted/30 p-5">
              <div className="mb-3 text-[10px] uppercase tracking-widest text-muted-foreground">Шкала вердиктов</div>
              <div className="space-y-2">
                {[
                  { label: 'STRONG BUY',       range: '85–100', color: '#16a34a' },
                  { label: 'GOOD BUY',          range: '70–84',  color: '#65a30d' },
                  { label: 'FAIR BUY',          range: '55–69',  color: '#0ea5e9' },
                  { label: 'BUY IF YOU LOVE IT',range: '40–54',  color: '#ea580c' },
                  { label: 'HIGH DEPRECIATION', range: '0–39',   color: '#dc2626' },
                ].map((v) => (
                  <div key={v.label} className="flex items-center justify-between text-[12px]">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full" style={{ background: v.color }} />
                      <span className="font-medium">{v.label}</span>
                    </div>
                    <span className="text-muted-foreground">{v.range}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
