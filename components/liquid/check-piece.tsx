"use client";

import { useState } from 'react';
import { Link2, Upload, ArrowRight } from 'lucide-react';

const platforms = [
  'Farfetch', 'Net-a-Porter', 'MyTheresa',
  'Vestiaire Collective', 'The RealReal', 'eBay',
];

export function CheckPiece() {
  const [url, setUrl] = useState('');

  return (
    <section id="check" className="bg-[#0a0a0a] py-24 lg:py-36">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="reveal text-center">
          <div className="mb-6 inline-block border border-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white/50">
            Core Feature
          </div>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-tight text-white">
            Стоит ли покупать эту вещь?
          </h2>
          <p className="mt-5 text-base text-white/50">
            Вставьте ссылку — получите полный аналитический отчёт за 3 минуты
          </p>
        </div>

        {/* Main input block */}
        <div className="reveal mt-14 border border-white/10 bg-white/5 p-8 lg:p-12" style={{ animationDelay: '0.1s' }}>

          {/* URL row */}
          <label className="mb-2 block text-[12px] uppercase tracking-widest text-white/40">
            Ссылка на товар
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Link2 className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.farfetch.com/shopping/..."
                className="w-full border border-white/10 bg-white/5 py-4 pl-11 pr-4 text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-white/40"
              />
            </div>
            <button className="group flex items-center justify-center gap-2 bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-white/90">
              Analyze
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Divider */}
          <div className="my-8 flex items-center gap-5">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[12px] uppercase tracking-widest text-white/30">или</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Photo upload */}
          <label className="group flex cursor-pointer flex-col items-center justify-center gap-4 border border-dashed border-white/10 py-14 transition-all hover:border-white/30 hover:bg-white/5">
            <Upload className="h-10 w-10 text-white/25 transition-colors group-hover:text-white/50" />
            <div className="text-center">
              <div className="text-sm font-medium text-white/70">Загрузите фотографию</div>
              <div className="mt-1 text-xs text-white/30">JPG, PNG до 10 МБ</div>
            </div>
            <input type="file" className="hidden" accept="image/*" />
          </label>
        </div>

        {/* Platforms */}
        <div className="reveal mt-10 text-center" style={{ animationDelay: '0.2s' }}>
          <div className="mb-4 text-[11px] uppercase tracking-widest text-white/30">
            Поддерживаемые площадки
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((p) => (
              <span
                key={p}
                className="border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/50"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* What you get */}
        <div className="reveal mt-16 grid gap-4 sm:grid-cols-3" style={{ animationDelay: '0.3s' }}>
          {[
            { icon: '01', title: 'Сравнение с рынком', desc: 'Актуальные цены на retail и ресейл платформах' },
            { icon: '02', title: 'LIQUID SCORE', desc: 'Комплексная оценка ликвидности 0–100' },
            { icon: '03', title: 'Прогноз стоимости', desc: 'Сколько вы сможете вернуть при перепродаже' },
          ].map((item) => (
            <div key={item.icon} className="border border-white/10 bg-white/5 p-6">
              <div className="mb-3 font-mono text-[11px] text-white/30">{item.icon}</div>
              <div className="font-semibold text-white">{item.title}</div>
              <div className="mt-2 text-xs leading-relaxed text-white/40">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
