import "./globals.css";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { Days_One as FontHeading, Nunito as FontSans } from "next/font/google";

import { siteConfig } from "@/configs/site.config";
import { cn } from "@/lib/utils";

import { NavbarContainer } from "@/components/blocks/nav/container-navbar";
import { Footer } from "@/components/blocks/nav/footer";
import type { Metadata } from "next";

const font = FontSans({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans",
});

const fontHeading = FontHeading({
  weight: ["400"],
  subsets: ["cyrillic", "latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: siteConfig.site_name,
  description: siteConfig.site_description[siteConfig.site_lang],
  metadataBase: new URL(siteConfig.site_domain),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.site_lang} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "relative w-full",
          "font-sans antialiased",
          font.variable,
          fontHeading.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-screen-limit mx-auto flex min-h-screen flex-col">
            <header className="fixed left-0 top-0 z-50 w-full">
              <Nav />
            </header>
            <main className="flex-grow">{children}</main>
            <footer className="mt-auto shrink-0">
              <Footer />
            </footer>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav id={id} className="container mx-auto flex w-full justify-center pb-4">
      <NavbarContainer />
    </nav>
  );
};
