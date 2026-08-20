/**
 * Reusable product analysis card — used across Discover / Best Buys / Wishlist.
 * Renders an editorial placeholder tile (brand + model, monochrome gradient)
 * instead of a real photo, so it works before a real image pipeline exists.
 * Swap the placeholder block for a real <Image> once product photography
 * is wired up to a backend/CMS.
 */

interface ProductAnalysisCardProps {
  name: string;
  brand: string;
  image?: string;
  retailPrice: number;
  marketPrice: number;
  estimatedResale: string;
  liquidityScore: number;
  valueRetention: number;
  verdict: 'STRONG BUY' | 'GOOD BUY' | 'FAIR BUY' | 'BUY IF YOU LOVE IT' | 'HIGH DEPRECIATION';
  showGraph?: boolean;
}

export function ProductAnalysisCard({
  name,
  brand,
  retailPrice,
  marketPrice,
  estimatedResale,
  liquidityScore,
  valueRetention,
  verdict,
  showGraph = false,
}: ProductAnalysisCardProps) {
  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case 'STRONG BUY':
        return 'text-success border-success';
      case 'GOOD BUY':
        return 'text-success border-success';
      case 'FAIR BUY':
        return 'text-info border-info';
      case 'BUY IF YOU LOVE IT':
        return 'text-warning border-warning';
      case 'HIGH DEPRECIATION':
        return 'text-warning border-warning';
      default:
        return 'text-foreground border-border';
    }
  };

  return (
    <div className="group relative overflow-hidden border border-border bg-card transition-all hover:shadow-2xl">
      {/* Editorial placeholder image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#f2e8d3] via-[#e3d3a8] to-[#c9b285] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        <div className="text-center">
          <div className="font-serif text-xs uppercase tracking-[0.25em] text-[#16213e]/70">{brand}</div>
          <div className="mt-1 font-serif text-[11px] tracking-[0.15em] text-[#16213e]/60">{name}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Brand & Name */}
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">
            {brand}
          </div>
          <h3 className="font-serif text-2xl font-semibold mt-1">{name}</h3>
        </div>

        {/* Price Grid */}
        <div className="grid grid-cols-2 gap-4 border-t border-b border-border py-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Retail price
            </div>
            <div className="text-lg font-semibold mt-1">{retailPrice.toLocaleString('ru-RU')} ₽</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Market price
            </div>
            <div className="text-lg font-semibold mt-1">{marketPrice.toLocaleString('ru-RU')} ₽</div>
          </div>
          <div className="col-span-2">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Estimated resale
            </div>
            <div className="text-lg font-semibold mt-1">{estimatedResale}</div>
          </div>
        </div>

        {/* Scores */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Liquidity
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl font-bold">{liquidityScore}</span>
              <span className="text-muted-foreground">/ 10</span>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Value retention
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl font-bold">{valueRetention}%</span>
            </div>
          </div>
        </div>

        {/* Verdict */}
        <div className={`border-l-2 pl-4 py-2 ${getVerdictColor(verdict)}`}>
          <div className="text-xs uppercase tracking-wider opacity-70">Verdict</div>
          <div className="font-semibold text-lg mt-1">{verdict}</div>
        </div>

        {/* Mini Graph (если нужен) */}
        {showGraph && (
          <div className="pt-4 border-t border-border">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Price trend (12 months)
            </div>
            <div className="h-20 flex items-end gap-1">
              {[75, 78, 80, 82, 85, 87, 86, 88, 89, 87, 90, 87].map((value, i) => (
                <div
                  key={i}
                  className="flex-1 bg-accent/20 hover:bg-accent/40 transition-colors rounded-t"
                  style={{ height: `${value}%` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}