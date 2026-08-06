import { Container } from "@/components/ui/container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,color-mix(in_srgb,var(--accent)_20%,transparent),transparent_50%)]"
      />
      <Container className="py-16 sm:py-20">
        <div className="reveal max-w-2xl">
          <span className="mb-3 inline-block rounded-full bg-background px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {eyebrow}
          </span>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
