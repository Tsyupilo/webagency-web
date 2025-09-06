import type { MenuLang } from "./site.config";

type SocialLinks = Record<string, MenuLang>;
type ContactLinks = Record<string, MenuLang>;
type BotLinks = Record<string, MenuLang>;

export const socialLinks: SocialLinks = {
  telegram: {
    en: "https://t.me/wwwizards_webstudio",
    ru: "https://t.me/wwwizards_agency",
  },
  whatsapp: {
    en: "https://wa.me/79819063818",
    ru: "https://wa.me/79819063818",
  },
  vk: {
    en: "https://vk.ru/wwwizards_webstudio",
    ru: "https://vk.ru/wwwizards_agency",
  },
  insta: {
    en: "https://www.instagram.com/wwwizards_webstudio",
    ru: "https://www.instagram.com/wwwizards_webstudio",
  },
};

export const contactLinks: ContactLinks = {
  email: {
    en: "info@wwwizards.com",
    ru: "info@wwwizards.ru",
  },
  phone: {
    en: "+1 (111) 111-11-11",
    ru: "+7 (981) 906-38-18",
  },
};

export const botLinks: BotLinks = {
  telegram: {
    en: "https://t.me/wwwizards_webstudio_bot",
    ru: "https://t.me/wwwizards_agency_bot",
  },
};
