import { Logo } from "@/components/assets/icons/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { contentMenu, mainMenu, menuHeadings } from "@/configs/menu.config";
import { siteConfig } from "@/configs/site.config";
import Link from "next/link";

export const Footer = () => {
  return (
    <section className="container mx-auto flex w-full flex-col gap-4 py-12">
      <div className="flex w-full justify-between">
        <div className="not-prose flex flex-col gap-6">
          <Link href="/">
            <h3 className="sr-only">{siteConfig.site_name}</h3>
            <Logo />
          </Link>
          <p>{siteConfig.site_description[siteConfig.site_lang]}</p>
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
      </div>
      <div className="not-prose mt-4 flex flex-col justify-between gap-6 border-t pt-4 md:mt-8 md:flex-row md:items-center md:gap-2 md:pt-8">
        <ThemeToggle />
        <p className="text-muted-foreground">&copy; {siteConfig.site_name}</p>
      </div>
    </section>
  );
};
