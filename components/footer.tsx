import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-card">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            href="/"
            className="font-serif text-xl font-semibold text-foreground"
          >
            {siteConfig.name}
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Разделы
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Контакты
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="transition-colors hover:text-primary"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-primary"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Готовы познакомиться?
          </h3>
          <p className="text-sm text-foreground/80">
            Оставьте заявку — расскажем о лошадях и услугах, подберём удобное
            время для визита в конюшню.
          </p>
          <Button href="/contacts" size="sm">
            {siteConfig.ctaLabel}
          </Button>
        </div>
      </Container>

      <div className="border-t border-border py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {siteConfig.name}. Все права защищены.
          </p>
          <p>Сделано с любовью к лошадям.</p>
        </Container>
      </div>
    </footer>
  );
}
