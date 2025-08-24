"use client";

// React and Next Imports
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";

// Utility Imports
import { cn } from "@/lib/utils";
import { ArrowRightSquare, Menu } from "lucide-react";

// Component Imports
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { contentMenu, mainMenu } from "@/configs/menu.config";
import { siteConfig } from "@/configs/site.config";
import Logo from "@/public/logo.svg";
import Image from "next/image";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center justify-between px-4 py-2">
      <Link href="/">
        <h3 className="sr-only">{siteConfig.site_name}</h3>
        <Image
          src={Logo}
          alt="Logo"
          width={150}
          height={25}
          className="invert dark:invert-0"
        ></Image>
      </Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="w-10 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <Menu />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <SheetHeader>
            <SheetTitle className="text-left">
              <MobileLink
                href="/"
                className="flex items-center"
                onOpenChange={setOpen}
              >
                <ArrowRightSquare className="mr-2 h-4 w-4" />
                <span>{siteConfig.site_name}</span>
              </MobileLink>
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
            <div className="flex flex-col space-y-3">
              <h3 className="text-small mt-6">Menu</h3>
              <Separator />
              {Object.entries(mainMenu).map(([key, href]) => (
                <MobileLink key={key} href={href} onOpenChange={setOpen}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </MobileLink>
              ))}
              <h3 className="text-small pt-6">Blog Menu</h3>
              <Separator />
              {Object.entries(contentMenu).map(([key, href]) => (
                <MobileLink key={key} href={href} onOpenChange={setOpen}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </MobileLink>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn("text-lg", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
