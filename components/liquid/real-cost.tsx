export function RealCost() {
  return (
    <section className="bg-[#f2e8d3] py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="reveal mb-16 text-center">
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight">
            Сколько вы реально теряете
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">
            Цена вещи — это не только то, сколько вы платите сегодня.
            Это ещё и то, сколько вы сможете вернуть завтра.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* ── Вариант A: плохой ── */}
          <div className="reveal border border-border bg-card">
            <div className="border-b border-border px-8 py-5 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-[#ea580c]">Вариант A</div>
                <div className="mt-1 font-serif text-xl font-semibold">Трендовое платье</div>
              </div>
              <div className="text-3xl">📉</div>
            </div>

            <div className="divide-y divide-border px-8">
              <div className="flex items-center justify-between py-4">
                <span className="text-sm text-muted-foreground">Цена покупки</span>
                <span className="font-semibold">90 000 ₽</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-sm text-muted-foreground">Продажа через год</span>
                <span className="font-semibold">25 000 ₽</span>
              </div>
              <div className="flex items-center justify-between py-5">
                <span className="font-medium">Потеря стоимости</span>
                <span className="font-serif text-4xl font-bold text-[#ea580c]">−72%</span>
              </div>
            </div>

            {/* Loss bar */}
            <div className="mx-8 mb-8">
              <div className="h-2 overflow-hidden bg-muted">
                <div className="h-full bg-[#ea580c]" style={{ width: '72%' }} />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>Потеряно: <strong className="text-foreground">65 000 ₽</strong></span>
                <span>Осталось: <strong className="text-foreground">28%</strong></span>
              </div>
            </div>

            <div className="border-t border-[#ea580c]/20 bg-[#ea580c]/5 px-8 py-4">
              <div className="text-xs text-[#ea580c]">LIQUID SCORE для этой вещи: <strong>31 / 100</strong> — HIGH DEPRECIATION</div>
            </div>
          </div>

          {/* ── Вариант B: хороший ── */}
          <div className="reveal border border-border bg-card" style={{ animationDelay: '0.1s' }}>
            <div className="border-b border-border px-8 py-5 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-[#16a34a]">Вариант B</div>
                <div className="mt-1 font-serif text-xl font-semibold">Luxury bag</div>
              </div>
              <div className="text-3xl">📈</div>
            </div>

            <div className="divide-y divide-border px-8">
              <div className="flex items-center justify-between py-4">
                <span className="text-sm text-muted-foreground">Цена покупки</span>
                <span className="font-semibold">150 000 ₽</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-sm text-muted-foreground">Продажа через год</span>
                <span className="font-semibold">125 000 ₽</span>
              </div>
              <div className="flex items-center justify-between py-5">
                <span className="font-medium">Потеря стоимости</span>
                <span className="font-serif text-4xl font-bold text-[#16a34a]">−17%</span>
              </div>
            </div>

            {/* Loss bar */}
            <div className="mx-8 mb-8">
              <div className="h-2 overflow-hidden bg-muted">
                <div className="h-full bg-[#16a34a]" style={{ width: '17%' }} />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>Потеряно: <strong className="text-foreground">25 000 ₽</strong></span>
                <span>Осталось: <strong className="text-foreground">83%</strong></span>
              </div>
            </div>

            <div className="border-t border-[#16a34a]/20 bg-[#16a34a]/5 px-8 py-4">
              <div className="text-xs text-[#16a34a]">LIQUID SCORE для этой вещи: <strong>89 / 100</strong> — STRONG BUY</div>
            </div>
          </div>
        </div>

        {/* Pull quote */}
        <div className="reveal mt-20 border-l-2 border-foreground pl-8" style={{ animationDelay: '0.25s' }}>
          <p className="font-serif text-[clamp(1.2rem,3vw,1.8rem)] font-semibold italic leading-snug">
            &laquo;Умная покупка — это не та, что дешевле.
            Это та, которая сохраняет свою ценность.&raquo;
          </p>
        </div>
      </div>
    </section>
  );
}
