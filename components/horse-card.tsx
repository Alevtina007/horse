import { Ruler, Sparkle, Trophy } from "lucide-react";
import { type Horse } from "@/data/horses";
import { Button } from "@/components/ui/button";

const emojiByGender: Record<Horse["gender"], string> = {
  Жеребец: "🐎",
  Кобыла: "🐴",
  Мерин: "🐎",
};

export function HorseCard({ horse, delay = 0 }: { horse: Horse; delay?: number }) {
  return (
    <article
      className="reveal group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[linear-gradient(150deg,color-mix(in_srgb,var(--secondary)_28%,transparent),color-mix(in_srgb,var(--accent)_28%,transparent))]">
        <span className="text-6xl transition-transform duration-500 group-hover:scale-110">
          {emojiByGender[horse.gender]}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
          {horse.price}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-serif text-xl font-semibold text-foreground">
            {horse.name}
          </h3>
          <span className="text-sm text-muted-foreground">{horse.age}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-primary">{horse.breed}</p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {horse.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Ruler className="h-3.5 w-3.5 text-secondary" />
            {horse.height}
          </span>
          <span className="flex items-center gap-1.5">
            <Trophy className="h-3.5 w-3.5 text-secondary" />
            {horse.discipline}
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkle className="h-3.5 w-3.5 text-secondary" />
            {horse.color}, {horse.gender.toLowerCase()}
          </span>
        </div>

        <Button href="/contacts" variant="outline" size="sm" className="mt-5 w-full">
          Узнать подробнее
        </Button>
      </div>
    </article>
  );
}
