import type { Metadata } from "next";
import { Inter, Cormorant } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/liquid/navbar";
import { Footer } from "@/components/liquid/footer";
import { RevealObserver } from "@/components/reveal-observer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: 'swap',
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: "LIQUID — Fashion value intelligence",
    template: "%s — LIQUID",
  },
  description: "Buy what holds value. LIQUID анализирует цену, спрос и потенциал перепродажи fashion- и luxury-вещей до того, как вы их купите.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <RevealObserver />
        </ThemeProvider>
      </body>
    </html>
  );
}
