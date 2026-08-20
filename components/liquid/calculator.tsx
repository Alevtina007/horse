"use client";

import { useState, useMemo } from 'react';

export function Calculator() {
  const [purchasePrice, setPurchasePrice] = useState('200000');
  const [resalePrice, setResalePrice] = useState('160000');
  const [monthsOwned, setMonthsOwned] = useState('24');

  const result = useMemo(() => {
    const purchase = parseFloat(purchasePrice) || 0;
    const resale = parseFloat(resalePrice) || 0;
    const months = parseFloat(monthsOwned) || 1;

    const totalLoss = Math.max(purchase - resale, 0);
    const monthlyLoss = totalLoss / months;
    const retentionPercent = purchase > 0 ? Math.round((resale / purchase) * 100) : 0;

    return { totalLoss, monthlyLoss, retentionPercent };
  }, [purchasePrice, resalePrice, monthsOwned]);

  const fields = [
    { id: 'purchase', label: 'Цена покупки, ₽', value: purchasePrice, set: setPurchasePrice },
    { id: 'resale', label: 'Цена перепродажи, ₽', value: resalePrice, set: setResalePrice },
    { id: 'months', label: 'Время владения, мес.', value: monthsOwned, set: setMonthsOwned },
  ];

  return (
    <section className="bg-[#faf8f5] py-24 lg:py-36">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <div className="reveal mb-16 text-center">
          <div className="mb-5 inline-block border border-border px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Interactive Tool
          </div>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight">
            REAL COST CALCULATOR
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Рассчитайте реальную стоимость владения вещью
          </p>
        </div>

        <div className="reveal grid overflow-hidden border border-border bg-card lg:grid-cols-5">

          {/* Inputs */}
          <div className="space-y-6 border-b border-border p-8 lg:col-span-2 lg:border-b-0 lg:border-r lg:p-10">
            {fields.map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="mb-2 block text-[11px] uppercase tracking-widest text-muted-foreground">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type="number"
                  value={f.value}
                  onChange={(e) => f.set(e.target.value)}
                  className="w-full border border-border bg-background px-4 py-3.5 font-serif text-xl font-semibold outline-none transition-all focus:border-foreground"
                />
              </div>
            ))}
          </div>

          {/* Results */}
          <div className="bg-foreground p-8 text-primary-foreground lg:col-span-3 lg:p-10">
            <div className="text-[11px] uppercase tracking-widest text-white/40 mb-8">
              Реальная стоимость владения
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <div className="text-xs text-white/40 mb-2">Общая потеря</div>
                <div className="font-serif text-3xl font-bold">
                  {result.totalLoss.toLocaleString('ru-RU')} ₽
                </div>
              </div>
              <div>
                <div className="text-xs text-white/40 mb-2">Потеря в месяц</div>
                <div className="font-serif text-3xl font-bold text-[#e07a7a]">
                  {result.monthlyLoss.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽
                </div>
              </div>
              <div>
                <div className="text-xs text-white/40 mb-2">Сохранено ценности</div>
                <div className="font-serif text-3xl font-bold">
                  {result.retentionPercent}%
                </div>
              </div>
            </div>

            {/* Retention bar */}
            <div className="mt-10">
              <div className="h-2 w-full overflow-hidden bg-white/10">
                <div
                  className="h-full bg-white transition-all duration-700"
                  style={{ width: `${Math.min(result.retentionPercent, 100)}%` }}
                />
              </div>
            </div>

            <div className="mt-8 border-l-2 border-white/30 pl-5 text-sm italic text-white/70">
              &laquo;Это как платить аренду за вещь — только один раз, вперёд.&raquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
