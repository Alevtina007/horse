import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const brands = [
  { name: 'Hermès',          retention: 94, trend: 'up' as const,      change: '+2%' },
  { name: 'Rolex',            retention: 91, trend: 'up' as const,      change: '+1%' },
  { name: 'Chanel',           retention: 89, trend: 'stable' as const,  change: '0%' },
  { name: 'Louis Vuitton',    retention: 85, trend: 'up' as const,      change: '+3%' },
  { name: 'The Row',          retention: 82, trend: 'up' as const,      change: '+5%' },
  { name: 'Bottega Veneta',   retention: 76, trend: 'stable' as const,  change: '0%' },
  { name: 'Prada',            retention: 72, trend: 'down' as const,    change: '-2%' },
  { name: 'Dior',             retention: 70, trend: 'stable' as const,  change: '0%' },
  { name: 'Gucci',            retention: 68, trend: 'down' as const,    change: '-4%' },
  { name: 'Balenciaga',       retention: 64, trend: 'down' as const,    change: '-8%' },
  { name: 'Off-White',        retention: 61, trend: 'down' as const,    change: '-6%' },
  { name: 'Jacquemus',        retention: 58, trend: 'down' as const,    change: '-3%' },
];

const trendMeta = {
  up:     { Icon: TrendingUp,   color: '#16a34a' },
  down:   { Icon: TrendingDown, color: '#ea580c' },
  stable: { Icon: Minus,        color: '#737373' },
};

export function BrandIndex() {
  const maxRetention = Math.max(...brands.map((b) => b.retention));

  return (
    <section id="brand-index" className="bg-[#0d1b2e] py-24 lg:py-36">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <div className="reveal mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-white">
              LIQUID BRAND INDEX
            </h2>
            <p className="mt-3 text-white/50">
              Средний показатель сохранения стоимости по брендам
            </p>
          </div>
          <div className="text-xs uppercase tracking-widest text-white/30">
            {new Date().toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })}
          </div>
        </div>

        {/* Header row */}
        <div className="mb-2 grid grid-cols-12 gap-4 px-5 text-[10px] uppercase tracking-widest text-white/30">
          <div className="col-span-1">#</div>
          <div className="col-span-4">Бренд</div>
          <div className="col-span-4">Retention</div>
          <div className="col-span-2 text-right">Score</div>
          <div className="col-span-1 text-right">30д</div>
        </div>

        <div className="divide-y divide-white/5 border-t border-white/5">
          {brands.map((brand, index) => {
            const { Icon, color } = trendMeta[brand.trend];
            return (
              <div
                key={brand.name}
                className="reveal group grid grid-cols-12 items-center gap-4 px-5 py-4 transition-colors hover:bg-white/5"
                style={{ animationDelay: `${index * 0.04}s` }}
              >
                <div className="col-span-1 font-mono text-xs text-white/30">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <div className="col-span-4 font-medium text-white">{brand.name}</div>

                {/* Bar */}
                <div className="col-span-4">
                  <div className="h-1.5 w-full overflow-hidden bg-white/10">
                    <div
                      className="h-full bg-white transition-all duration-1000"
                      style={{
                        width: `${(brand.retention / maxRetention) * 100}%`,
                        transitionDelay: `${index * 40}ms`,
                      }}
                    />
                  </div>
                </div>

                <div className="col-span-2 text-right font-serif text-xl font-bold text-white">
                  {brand.retention}%
                </div>

                <div className="col-span-1 flex items-center justify-end gap-1">
                  <Icon className="h-3.5 w-3.5" style={{ color }} />
                  <span className="text-xs font-medium" style={{ color }}>{brand.change}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="reveal mt-10 flex flex-wrap justify-center gap-6 text-xs text-white/40">
          <div className="flex items-center gap-2"><TrendingUp className="h-3.5 w-3.5 text-[#16a34a]" /> Рост спроса</div>
          <div className="flex items-center gap-2"><Minus className="h-3.5 w-3.5" /> Стабильно</div>
          <div className="flex items-center gap-2"><TrendingDown className="h-3.5 w-3.5 text-[#ea580c]" /> Снижение</div>
        </div>
      </div>
    </section>
  );
}
