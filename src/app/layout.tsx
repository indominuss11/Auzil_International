import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { seoDefaults } from "@/data/seo";

// Fraunces: a soft, slightly rounded serif with warmth that suits the
// boutique direction better than a strict classical serif. Kept at
// optical size "text" for headings so it doesn't skew too display-heavy.
const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
  display: "swap",
});

// Nunito Sans: rounded terminals read friendlier than Manrope's sharper
// geometry, while staying highly legible for body copy and UI text.
const body = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seoDefaults.siteUrl),
  title: {
    default: seoDefaults.defaultTitle,
    template: seoDefaults.titleTemplate,
  },
  description: seoDefaults.defaultDescription,
  openGraph: {
    title: seoDefaults.defaultTitle,
    description: seoDefaults.defaultDescription,
    url: seoDefaults.siteUrl,
    siteName: seoDefaults.siteName,
    locale: seoDefaults.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoDefaults.defaultTitle,
    description: seoDefaults.defaultDescription,
  },
  icons: {
    icon: "/images/brand/auzil-butterfly-favicon.png",
    apple: "/images/brand/auzil-butterfly-favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
