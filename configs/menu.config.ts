import type { MenuLang } from "./site.config";

type MenuHeadings = {
  about: MenuLang;
  services: MenuLang;
  servicesAdditional: MenuLang;
};

type MenuItem = {
  href: string;
  label: MenuLang;
};

type MenuContent = Record<string, MenuItem>;

export const menuHeadings: MenuHeadings = {
  about: {
    en: "About",
    ru: "О нас",
  },
  services: {
    en: "Услуги",
    ru: "Услуги",
  },
  servicesAdditional: {
    en: "Additional",
    ru: "Дополнительно",
  },
};

export const mainMenu: MenuContent = {
  about: {
    href: "/",
    label: {
      en: "About agency",
      ru: "Об агенстве",
    },
  },
  prices: {
    href: "/prices",
    label: {
      en: "Prices",
      ru: "Цены",
    },
  },
  portfolio: {
    href: "/portfolio",
    label: {
      en: "Portfolio",
      ru: "Портфолио",
    },
  },
  referrals: {
    href: "/referrals",
    label: {
      en: "Referrals",
      ru: "Партнерская программа",
    },
  },
  blog: {
    href: "/posts",
    label: {
      en: "Blog",
      ru: "Блог",
    },
  },
  contacts: {
    href: "/contacts",
    label: {
      en: "Contacts",
      ru: "Контакты",
    },
  },
};

export const contentMenu: MenuContent = {
  fastStart: {
    href: "",
    label: {
      en: "Fast start",
      ru: "Быстрый запуск",
    },
  },
  development: {
    href: "/services/development",
    label: {
      en: "Development",
      ru: "Разработка сайта",
    },
  },
  seo: {
    href: "/services/seo",
    label: {
      en: "SEO",
      ru: "SEO оптимизация",
    },
  },
  marketing: {
    href: "/services/marketing",
    label: {
      en: "Marketing",
      ru: "Реклама и маркетинг",
    },
  },
  design: {
    href: "/services/design",
    label: {
      en: "Design",
      ru: "Веб-дизайн и UX/UI",
    },
  },
  content: {
    href: "/services/content",
    label: {
      en: "Content strategy",
      ru: "Создание контента",
    },
  },
  automation: {
    href: "/services/automation",
    label: {
      en: "Automation & AI",
      ru: "Автоматизаци и AI",
    },
  },
  crm: {
    href: "/services/crm",
    label: {
      en: "CRM",
      ru: "Внедрение CRM",
    },
  },
  integrations: {
    href: "/services/integrations",
    label: {
      en: "Integrations of web services",
      ru: "Интеграции веб-сервисов",
    },
  },
  audit: {
    href: "/services/audit",
    label: {
      en: "Audit of your site",
      ru: "Аудит вашего сайта",
    },
  },
  technicalSupport: {
    href: "/services/development/support",
    label: {
      en: "Technical support",
      ru: "Техническая поддержка",
    },
  },
};
