export function Philosophy() {
  return (
    <section id="best-buys" className="relative py-32 lg:py-40 bg-foreground text-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center">
          <h2 className="font-serif text-5xl font-semibold leading-tight tracking-tight lg:text-7xl">
            Your wardrobe has a balance sheet.
          </h2>
        </div>

        <div className="reveal mt-16 space-y-8 text-lg lg:text-xl leading-relaxed" style={{ animationDelay: '0.2s' }}>
          <p className="opacity-90">
            Мы привыкли оценивать покупку по цене на ценнике.
          </p>
          
          <p className="opacity-90">
            LIQUID предлагает смотреть иначе.
          </p>
          
          <p className="opacity-90">
            Некоторые вещи практически полностью теряют стоимость после покупки. Другие остаются востребованными годами.
          </p>
          
          <p className="opacity-90 font-semibold">
            Мы помогаем увидеть эту разницу заранее.
          </p>
        </div>

        <div className="reveal mt-20 grid gap-8 lg:grid-cols-3 text-center" style={{ animationDelay: '0.4s' }}>
          <div className="border-t border-background/20 pt-6">
            <div className="text-4xl font-bold">12K+</div>
            <div className="mt-2 text-sm uppercase tracking-wider opacity-70">
              Проанализировано вещей
            </div>
          </div>
          <div className="border-t border-background/20 pt-6">
            <div className="text-4xl font-bold">₽4,5 млрд+</div>
            <div className="mt-2 text-sm uppercase tracking-wider opacity-70">
              Общая стоимость анализов
            </div>
          </div>
          <div className="border-t border-background/20 pt-6">
            <div className="text-4xl font-bold">2,400+</div>
            <div className="mt-2 text-sm uppercase tracking-wider opacity-70">
              Довольных клиентов
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}