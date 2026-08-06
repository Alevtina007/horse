import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

const items = [
  {
    icon: Phone,
    label: "Телефон",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: Mail,
    label: "Почта",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: siteConfig.address,
  },
  {
    icon: Clock,
    label: "Время работы",
    value: siteConfig.workingHours,
  },
] as const;

export function ContactInfo() {
  return (
    <div className="reveal flex flex-col gap-6">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <ul className="flex flex-col gap-5">
          {items.map((item) => (
            <li key={item.label} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-primary">
                <item.icon className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </p>
                {"href" in item && item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3">
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          <MessageCircle className="h-4 w-4 text-secondary" />
          WhatsApp
        </a>
        <a
          href={siteConfig.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          <MessageCircle className="h-4 w-4 text-primary" />
          Telegram
        </a>
      </div>

      <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-[linear-gradient(150deg,color-mix(in_srgb,var(--secondary)_25%,transparent),color-mix(in_srgb,var(--accent)_25%,transparent))]">
        <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
          <MapPin className="h-6 w-6 text-primary" />
          <p className="text-sm font-medium text-foreground">
            {siteConfig.address}
          </p>
          <p className="text-xs text-muted-foreground">
            Место для карты проезда
          </p>
        </div>
      </div>
    </div>
  );
}
