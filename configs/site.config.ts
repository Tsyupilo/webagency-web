type SiteLang = "en" | "ru";
export type MenuLang = {
  en: string;
  ru: string;
};

type SiteConfig = {
  site_lang: SiteLang;
  site_domain: string;
  site_name: string;
  site_description: MenuLang;
};

export const siteConfig: SiteConfig = {
  site_lang: "ru",
  site_name: "Web Agency",
  site_description: {
    en: "Digital agency: Web Design & Development, SEO, Marketing, Content and more.",
    ru: "Агентство: Веб-дизайн и разработка, SEO, маркетинг, контент и многое другое.",
  },
  site_domain: "http://localhost:3000",
};
