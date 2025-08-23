"use client";
import { siteConfig } from "@/configs/site.config";
import { cn } from "@/lib/utils";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  HoveredLink,
  Menu,
  MenuItem,
  MenuLink,
  ProductItem,
} from "./navbar-menu";
import ThemeButton from "../theme/ui/theme-button";
import { MessageCircle, MousePointerClick } from "lucide-react";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("mx-auto w-full", className)}>
      <Menu setActive={setActive}>
        <Link href="/" className="invert dark:invert-0">
          <h3 className="sr-only">{siteConfig.site_name}</h3>
          <Image src={Logo} alt="Logo" width={203} height={33} />
        </Link>
        <div className="flex items-center">
          <MenuItem setActive={setActive} active={active} item="Услуги">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="О нас">
            <div className="grid w-full grid-cols-2 gap-10 p-4 text-sm">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Test 1"
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Test 2"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Test 3"
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Test 4"
              />
            </div>
          </MenuItem>
          <MenuLink setActive={setActive} active={active} href="/portfolio">
            Портфолио
          </MenuLink>
          <MenuLink setActive={setActive} active={active} href="/">
            Цены
          </MenuLink>
          <MenuLink setActive={setActive} active={active} href="/contact">
            Контакты
          </MenuLink>
        </div>
        <ThemeButton>
          Написать нам <MessageCircle className="h-4.5 w-4.5" />
        </ThemeButton>
      </Menu>
    </div>
  );
}
