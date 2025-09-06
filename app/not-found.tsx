import ThemeButton from "@/components/theme/ui/theme-button";
import { siteConfig } from "@/configs/site.config";

import Link from "next/link";

const CONTENT = {
  en: {
    title: "Page Not Found",
    description: "Sorry, the page you are looking for does not exist.",
    button: "Return Home",
  },
  ru: {
    title: "Страница не найдена",
    description: "Извините, страница, которую вы ищете, не существует.",
    button: "Вернуться на главную",
  },
};

export default function NotFound() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="relative flex min-h-[90vh] flex-col items-center justify-center text-center">
          <p className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none font-heading text-[25rem] text-primary opacity-5">
            <span style={{ textShadow: "0 0 48px hsla(var(--primary) / 0.8)" }}>
              404
            </span>
          </p>
          <h1 className="mb-2 text-4xl font-bold">
            {CONTENT[siteConfig.site_lang].title}
          </h1>
          <p className="mb-6">{CONTENT[siteConfig.site_lang].description}</p>
          <Link href="/">
            <ThemeButton divChild sizes="sm">
              {CONTENT[siteConfig.site_lang].button}
            </ThemeButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
