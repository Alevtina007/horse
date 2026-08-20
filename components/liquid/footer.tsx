import Link from 'next/link';
import { TrendingUp, ExternalLink } from 'lucide-react';

const links = {
  product: [
    { label: 'Check', href: '/check' },
    { label: 'Discover', href: '/discover' },
    { label: 'Best Buys', href: '/best-buys' },
    { label: 'Brand Index', href: '/brand-index' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Methodology', href: '/methodology' },
    { label: 'Services', href: '/services' },
    { label: 'FAQ', href: '/faq' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <Link href="/" className="group inline-flex items-center gap-2">
                <TrendingUp className="h-7 w-7 transition-transform group-hover:scale-110" />
                <div>
                  <div className="font-serif text-2xl font-semibold tracking-tight">
                    LIQUID
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Fashion value intelligence
                  </div>
                </div>
              </Link>
              <p className="mt-6 text-lg font-serif italic text-muted-foreground max-w-sm">
                Buy what holds value.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground border border-border px-4 py-2 transition-all hover:border-primary hover:text-foreground"
                >
                  Instagram <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground border border-border px-4 py-2 transition-all hover:border-primary hover:text-foreground"
                >
                  Telegram <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  Product
                </h3>
                <ul className="mt-6 space-y-3">
                  {links.product.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  Company
                </h3>
                <ul className="mt-6 space-y-3">
                  {links.company.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  Legal
                </h3>
                <ul className="mt-6 space-y-3">
                  {links.legal.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LIQUID. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Fashion on the surface. Financial intelligence underneath.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}