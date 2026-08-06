import { Star } from "lucide-react";
import { type Review } from "@/data/reviews";
import { cn } from "@/lib/utils";

export function ReviewCard({
  review,
  delay = 0,
}: {
  review: Review;
  delay?: number;
}) {
  return (
    <figure
      className="reveal flex h-full flex-col rounded-2xl border border-border bg-card p-6"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < review.rating
                ? "fill-accent text-accent"
                : "text-border",
            )}
          />
        ))}
      </div>

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
        «{review.text}»
      </blockquote>

      <figcaption className="mt-5 border-t border-border pt-4">
        <p className="text-sm font-semibold text-foreground">{review.name}</p>
        <p className="text-xs text-muted-foreground">{review.role}</p>
      </figcaption>
    </figure>
  );
}
