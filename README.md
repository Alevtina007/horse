# LIQUID — Fashion value intelligence

**Buy what holds value.**

LIQUID помогает понять до покупки, насколько выгодна fashion- или luxury-вещь:
адекватна ли цена, насколько вещь ликвидна на вторичном рынке и сколько можно
будет вернуть при перепродаже.

Built with Next.js (App Router), React, TypeScript and Tailwind CSS v4.

## Project structure

```
app/
  layout.tsx        Root layout — fonts, Navbar, Footer, ThemeProvider
  page.tsx           Landing page — composes all `components/liquid/*` sections
  globals.css        Design tokens (colors, fonts, keyframes) as CSS variables

components/liquid/    All LIQUID-specific UI, one component per section
  navbar.tsx              Sticky nav with scroll blur + mobile drawer
  hero.tsx                 Landing hero: headline + stats + analysis card
  hero-analysis-card.tsx   Self-contained showcase card (SVG sparkline, no images needed)
  check-piece.tsx           "Check a Piece" — URL / photo input (dark section)
  liquid-score.tsx          LIQUID SCORE gauge + metric bars + verdict legend
  real-cost.tsx              "How much you really lose" — two comparison cards
  services.tsx                CHECK / FIND / SELECT / PRIVATE pricing cards
  brand-index.tsx              Brand value-retention table (dark, index-style)
  calculator.tsx                 Interactive real-cost-of-ownership calculator
  how-it-works.tsx                3-step process
  philosophy.tsx                   Editorial "Your wardrobe has a balance sheet" block
  product-analysis-card.tsx       Reusable card for Discover / Best Buys / Wishlist
  footer.tsx

components/theme-provider.tsx  next-themes wrapper (light/dark)
components/reveal-observer.tsx IntersectionObserver powering `.reveal` scroll-in animation
components/ui/                  Generic primitives (Button, Container, SectionHeading)
lib/utils.ts                     `cn()` class-merging helper
```

All copy currently uses **mock data** defined inline in each component. This is
intentional — swap the arrays/objects for API calls once a backend exists.

## Next steps for a real backend

The frontend is deliberately structured so a backend can be dropped in without
restructuring the UI:

- **Auth** — plug in your provider in `components/theme-provider.tsx`'s sibling
  (`AuthProvider`) and gate `/account` routes; `Navbar`'s "Sign in" link is
  already wired to a stub anchor.
- **Product data / AI analysis** — replace the mock arrays in `check-piece.tsx`,
  `liquid-score.tsx`, `brand-index.tsx` and `product-analysis-card.tsx` props
  with data fetched from an API route (`app/api/...`) or server component.
- **Personal account** — `My Pieces`, `My Analyses`, `Wishlist`, `Portfolio`,
  `Sell Alerts` are referenced in the product spec but not yet built as routes;
  add them under `app/account/*` reusing `ProductAnalysisCard`.
- **Discover / Best Buys / Brand Index pages** — currently anchor sections on
  the landing page (`#discover`, `#best-buys`, `#brand-index`); promote to full
  routes (`app/discover/page.tsx`, etc.) once there's a real catalog to filter.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
