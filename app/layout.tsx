import "./globals.css";

import { Container, Section } from "@/components/craft";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Analytics } from "@vercel/analytics/react";
import { Nunito as FontSans, Days_One as FontHeading } from "next/font/google";

import { contentMenu, mainMenu, menuHeadings } from "@/configs/menu.config";
import { siteConfig } from "@/configs/site.config";
import { cn } from "@/lib/utils";

import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { Navbar } from "@/components/nav/navbar";
import type { Metadata } from "next";
import { NavbarContainer } from "@/components/nav/navbar-container";

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
  title: "WordPress & Next.js Starter by 9d8",
  description:
    "A starter template for Next.js with WordPress as a headless CMS.",
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
    <html lang="ru" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
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
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav id={id} className="sticky top-0 z-50 flex justify-center px-4 pb-4">
      <NavbarContainer />
    </nav>
  );
};

const Footer = () => {
  return (
    <footer>
      <Section>
        <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
              <h3 className="sr-only">{siteConfig.site_name}</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={150}
                height={25}
                className="invert dark:invert-0"
              />
            </Link>
            <p>
              <Balancer>
                {siteConfig.site_description[siteConfig.site_lang]}
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="text-base font-medium">
              {menuHeadings.website[siteConfig.site_lang]}
            </h5>
            {Object.entries(mainMenu).map(([key, item]) => (
              <Link
                className="underline-offset-4 hover:underline"
                key={item.href}
                href={item.href}
              >
                {item.label[siteConfig.site_lang]}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="text-base font-medium">
              {menuHeadings.blog[siteConfig.site_lang]}
            </h5>
            {Object.entries(contentMenu).map(([key, item]) => (
              <Link
                className="underline-offset-4 hover:underline"
                key={item.href}
                href={item.href}
              >
                {item.label[siteConfig.site_lang]}
              </Link>
            ))}
          </div>
        </Container>
        <Container className="not-prose mt-4 flex flex-col justify-between gap-6 border-t pt-4 md:mt-8 md:flex-row md:items-center md:gap-2 md:pt-8">
          <ThemeToggle />
          <p className="text-muted-foreground">&copy; {siteConfig.site_name}</p>
        </Container>
      </Section>
    </footer>
  );
};
