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
  site_name: "wwwizards agency",
  site_description: {
    en: "Digital agency: Web Design & Development, SEO, Marketing, Content and more",
    ru: "Уникальные цифровые решения: веб-дизайн, разработка, SEO, маркетинг, контент",
  },
  site_domain: "http://localhost:3000",
};
