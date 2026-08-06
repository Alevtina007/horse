import { type ServiceGroup } from "@/data/services";

export function ServiceGroupCard({
  group,
  delay = 0,
}: {
  group: ServiceGroup;
  delay?: number;
}) {
  return (
    <div
      className="reveal rounded-2xl border border-border bg-card p-6 sm:p-8"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="font-serif text-2xl font-semibold text-foreground">
        {group.title}
      </h3>
      <ul className="mt-6 flex flex-col divide-y divide-border">
        {group.items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
          >
            <div>
              <p className="font-medium text-foreground">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
            <div className="flex shrink-0 items-baseline gap-1 whitespace-nowrap sm:justify-end">
              <span className="font-serif text-lg font-semibold text-primary">
                {item.price}
              </span>
              {item.unit && (
                <span className="text-xs text-muted-foreground">
                  {item.unit}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
