/**
 * Hero Analysis Card — the showcase "The Row Margaux 15" card on the landing page.
 * Uses only CSS + SVG — no external image dependency, so it renders correctly
 * even before any real product images are uploaded.
 */

const sparklinePoints = [72, 75, 70, 78, 80, 82, 79, 85, 88, 86, 90, 87];

function Sparkline({ points }: { points: number[] }) {
  const W = 280;
  const H = 60;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;

  const xs = points.map((_, i) => (i / (points.length - 1)) * W);
  const ys = points.map((v) => H - ((v - min) / range) * H);

  const d =
    xs
      .map((x, i) => `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${ys[i].toFixed(1)}`)
      .join(' ');

  const fill = `${d} L ${W} ${H} L 0 ${H} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full overflow-visible">
      {/* Gradient fill */}
      <defs>
        <linearGradient id="spark-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6b1c23" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#6b1c23" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fill} fill="url(#spark-grad)" />
      <path d={d} fill="none" stroke="#6b1c23" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
      {/* Last point dot */}
      <circle cx={xs[xs.length - 1]} cy={ys[ys.length - 1]} r="3" fill="#6b1c23" />
    </svg>
  );
}

const metrics = [
  { label: 'Resale Demand', value: 92 },
  { label: 'Price Stability', value: 88 },
  { label: 'Value Retention', value: 87 },
];

export function HeroAnalysisCard() {
  return (
    <div className="w-full max-w-md mx-auto border border-border bg-card shadow-2xl">
      {/* ── Top image placeholder ── */}
      <div className="relative aspect-[4/3] bg-[#f0ebe4] overflow-hidden flex items-center justify-center">
        {/* Editorial fashion placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8e0d5] via-[#d4c9bb] to-[#bfb0a0]" />
        <div className="relative z-10 text-center">
          <div className="font-serif text-[13px] uppercase tracking-[0.25em] text-[#8a7a6a]">The Row</div>
          <div className="mt-1 font-serif text-[11px] tracking-[0.15em] text-[#8a7a6a]/80">Margaux 15</div>
        </div>

        {/* LIQUID SCORE badge */}
        <div className="absolute top-4 right-4 bg-foreground text-background px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest">
          Score 87
        </div>

        {/* Verdict ribbon */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#16a34a]/90 py-2 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-white">
            ✓ STRONG BUY
          </span>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="p-6 space-y-5">
        {/* Brand / Title */}
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">The Row</div>
          <div className="mt-0.5 font-serif text-2xl font-semibold">Margaux 15</div>
        </div>

        {/* Price grid */}
        <div className="grid grid-cols-3 gap-3 border-y border-border py-4 text-center">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Retail</div>
            <div className="mt-1 font-semibold">€5,390</div>
          </div>
          <div className="border-x border-border">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Market</div>
            <div className="mt-1 font-semibold">€4,850</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Resale est.</div>
            <div className="mt-1 font-semibold text-sm">€4,200–4,700</div>
          </div>
        </div>

        {/* Mini metric bars */}
        <div className="space-y-2.5">
          {metrics.map((m) => (
            <div key={m.label} className="flex items-center gap-3">
              <div className="w-28 shrink-0 text-[11px] text-muted-foreground">{m.label}</div>
              <div className="flex-1 h-1.5 bg-muted overflow-hidden">
                <div
                  className="h-full bg-foreground/80"
                  style={{ width: `${m.value}%` }}
                />
              </div>
              <div className="w-8 text-right text-[11px] font-semibold">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Sparkline */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Price trend · 12 months
            </span>
            <span className="text-[10px] font-semibold text-[#16a34a]">+15%</span>
          </div>
          <Sparkline points={sparklinePoints} />
        </div>

        {/* Selling time */}
        <div className="flex items-center justify-between border-t border-border pt-4">
          <span className="text-xs text-muted-foreground">Avg. selling time</span>
          <span className="text-sm font-semibold">14–30 days</span>
        </div>
      </div>
    </div>
  );
}
