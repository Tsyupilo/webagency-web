"use client";
import { Logo } from "@/components/assets/icons/logo";
import {
  EmailIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/assets/icons/socials/telegram";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { siteConfig } from "@/configs/site.config";
import { cn } from "@/lib/utils";
import { Book, Building2, MessageCircle, Phone, User } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  CategoryItem,
  Menu,
  MenuItem,
  MenuItemExpand,
  MenuLink,
} from "../../ui/navbar-menu";

const NAVBAR_LIST = {
  services: {
    title: "Услуги",
    categories: [
      {
        tag: "development",
        title: "Разработка сайтов",
        src: "https://assets.aceternity.com/demos/algochurn.webp",
      },
      {
        tag: "seo",
        title: "SEO оптимизация",
        src: "https://assets.aceternity.com/demos/tailwindmasterkit.webp",
      },
      {
        tag: "marketing",
        title: "Маркетинг и контент",
        src: "https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png",
      },
    ],
    content: {
      development: {
        columns: [
          {
            title: "По типу сайта",
            links: [
              { href: "/services/development/landing", text: "Быстрый запуск" },
              {
                href: "/services/development/landing",
                text: "Рекламные лендинги",
              },
              {
                href: "/services/development/corporate",
                text: "Корпоративные сайты и блоги",
              },
              { href: "/services/development/shop", text: "Интернет-магазины" },
              {
                href: "/services/development/catalog",
                text: "Каталоги продукции",
              },
              {
                href: "/services/development/portfolio",
                text: "Сайты-портфолио и визитки",
              },
            ],
          },
          {
            title: "По технологиям",
            links: [
              { href: "/services/development/wordpress", text: "WordPress" },
              {
                href: "/services/development/nextjs",
                text: "Next + WordPress",
              },
              { href: "/services/development/wordpress", text: "Webflow" },
              { href: "/services/development/wordpress", text: "Framer" },
            ],
          },
          {
            title: "Дополнительно",
            links: [
              {
                href: "/services/development/support",
                text: "Автоматизация и AI",
              },
              {
                href: "/services/development/support",
                text: "Интеграция CRM и веб-сервисов",
              },
              {
                href: "/services/development/adaptive",
                text: "Дизайн для рекламных кампаний",
              },
              { href: "/services/development/seo", text: "Техподдержка сайта" },
              {
                href: "/services/development/design",
                text: "Аудит и оптимизация вашего сайта",
              },
              {
                href: "/services/development/support",
                text: "Кастомные решения",
              },
            ],
          },
        ],
      },
      seo: {
        columns: [
          {
            title: "По отраслям",
            links: [
              { href: "/services/seo/medicine", text: "Медицина" },
              {
                href: "/services/seo/real-estate",
                text: "Агентство недвижимости",
              },
              { href: "/services/seo/construction", text: "Строительство" },
              { href: "/services/seo/lawyers", text: "Юриспруденция" },
              { href: "/services/seo/accounting", text: "Бухгалтерский учет" },
              { href: "/services/seo/hotels", text: "Отели" },
              { href: "/services/seo/car-service", text: "Автосервисы" },
              { href: "/services/seo/advocates", text: "Адвокаты" },
              { href: "/services/seo/housing", text: "Жилые комплексы" },
            ],
          },
          {
            title: "По виду продвижения",
            links: [
              { href: "/services/seo/traffic", text: "По трафику" },
              { href: "/services/seo/positions", text: "По позициям" },
              { href: "/services/seo/yandex", text: "Продвижение в Яндекс" },
              { href: "/services/seo/google", text: "Продвижение в Google" },
              { href: "/services/seo/turnkey", text: "Под ключ" },
              { href: "/services/seo/guaranteed", text: "С гарантией" },
              { href: "/services/seo/top10", text: "В ТОП-10" },
              {
                href: "/services/sepo/complex",
                text: "Комплексная оптимизация",
              },
              {
                href: "/services/seo/internal",
                text: "Внутренняя оптимизация",
              },
            ],
          },
          {
            title: "По ГЕО",
            links: [
              { href: "/services/seo/international", text: "Зарубежное SEO" },
              { href: "/services/seo/russia", text: "По регионам РФ" },
              { href: "/services/seo/cis", text: "Продвижение в СНГ" },
            ],
            additionalTitle: "Другие услуги",
            additionalLinks: [
              { href: "/services/seo/audit", text: "Аудит" },
              {
                href: "/services/seo/search-engines",
                text: "Продвижение в ПС",
              },
            ],
          },
        ],
      },
      marketing: {
        columns: [
          {
            title: "Социальные сети",
            links: [
              { href: "/services/marketing/smm", text: "SMM продвижение" },
              {
                href: "/services/marketing/target",
                text: "Таргетированная реклама",
              },
              {
                href: "/services/marketing/community",
                text: "Ведение соцсетей",
              },
            ],
          },
          {
            title: "Контент-маркетинг",
            links: [
              {
                href: "/services/marketing/content-strategy",
                text: "Стратегия контента",
              },
              { href: "/services/marketing/blogging", text: "Ведение блога" },
              { href: "/services/marketing/copywriting", text: "Копирайтинг" },
              { href: "/services/marketing/email", text: "Email-рассылки" },
            ],
          },
          {
            title: "Реклама и аналитика",
            links: [
              {
                href: "/services/marketing/context",
                text: "Контекстная реклама",
              },
              { href: "/services/marketing/analytics", text: "Веб-аналитика" },
              { href: "/services/marketing/crm", text: "Внедрение CRM" },
              {
                href: "/services/marketing/strategy",
                text: "Маркетинговая стратегия",
              },
            ],
          },
        ],
      },
    },
  },
  about: {
    title: "О нас",
    links: [
      { href: "/about", text: "Об агентстве", icon: Building2 },
      { href: "/posts", text: "Блог", icon: Book },
      { href: "/about", text: "Партнерская программа", icon: User },
      { href: "/contacts", text: "Обсудить проект", icon: MessageCircle },
      { href: "/contacts", text: "Контакты", icon: Phone },
    ],
  },
  simpleLinks: [
    { href: "/portfolio", text: "Портфолио" },
    { href: "/blog", text: "Блог" },
    { href: "/about", text: "О нас" },
    { href: "/contacts", text: "Контакты" },
  ],
  socials: [
    {
      href: "https://t.me/wwwizards",
      icon: TelegramIcon,
      name: "Чат в Telegram",
    },
    {
      href: "https://wa.me/79819063818",
      icon: WhatsAppIcon,
      name: "Чат в WhatsApp",
    },
    {
      href: "mailto:info@wwwizards.ru",
      icon: EmailIcon,
      name: "Написать письмо",
    },
  ],
};

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<string | null>(
    "development",
  );
  const [hasHoveredServices, setHasHoveredServices] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const getContentDelay = () => {
    if (active === NAVBAR_LIST.services.title && hasHoveredServices) {
      return 0;
    }
    return 0.3;
  };

  const renderContentColumns = (columns: any[]) => (
    <div className="grid grid-cols-3 gap-6">
      {columns.map((column, index) => (
        <div key={index}>
          <h4 className="mb-2 font-semibold text-muted-foreground">
            {column.title}
          </h4>
          <ul className="space-y-2">
            {column.links.map((link: any, linkIndex: number) => (
              <li key={linkIndex}>
                <Link href={link.href} className="hover:text-primary">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          {column.additionalTitle && column.additionalLinks && (
            <>
              <h4 className="mb-2 mt-6 font-semibold text-muted-foreground">
                {column.additionalTitle}
              </h4>
              <ul className="space-y-2">
                {column.additionalLinks.map((link: any, linkIndex: number) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="hover:text-primary">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveService("development");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={cn("mx-auto w-full", className)}>
      <Menu setActive={setActive}>
        <Link href="/" className="inline-flex w-48">
          <h3 className="sr-only">{siteConfig.site_name}</h3>
          <Logo />
        </Link>
        <div className="flex items-center">
          <MenuItemExpand
            setActive={setActive}
            setHasHovered={setHasHoveredServices}
            hasHovered={hasHoveredServices}
            active={active}
            item={NAVBAR_LIST.services.title}
            services={true}
          >
            <div
              className="flex w-full flex-col gap-4 2xl:max-w-4xl"
              ref={menuRef}
            >
              <div className="grid w-full grid-cols-3 gap-4">
                {NAVBAR_LIST.services.categories.map((category) => (
                  <CategoryItem
                    key={category.tag}
                    tag={category.tag}
                    setActive={setActiveService}
                    active={activeService}
                    title={category.title}
                    src={category.src}
                  />
                ))}
              </div>

              {/* Content Area */}
              <div className="w-full px-4">
                {/* Dynamic Content Rendering */}
                {Object.entries(NAVBAR_LIST.services.content).map(
                  ([serviceKey, serviceContent]) => (
                    <AnimatePresence key={serviceKey}>
                      {activeService === serviceKey && (
                        <motion.div
                          layout
                          transition={{
                            type: "tween",
                            duration: 0.2,
                            delay: getContentDelay(),
                          }}
                          initial={{ opacity: 0, height: 0 }}
                          animate={
                            activeService === serviceKey
                              ? {
                                  opacity: 1,
                                  height: "auto",
                                  filter: "blur(0)",
                                }
                              : {
                                  opacity: 0,
                                  height: 0,
                                  filter: "blur(0.6rem)",
                                }
                          }
                          exit={{
                            opacity: 0,
                            height: 0,
                            filter: "blur(0.6rem)",
                          }}
                        >
                          {renderContentColumns(serviceContent.columns)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ),
                )}
              </div>
            </div>
          </MenuItemExpand>
          <MenuItem
            setActive={setActive}
            active={active}
            item={NAVBAR_LIST.about.title}
          >
            <div className="flex flex-col gap-3.5 text-base">
              {NAVBAR_LIST.about.links.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="group/links flex items-center gap-2 transition-colors duration-300 hover:text-primary"
                  >
                    <IconComponent
                      size={18}
                      className="text-muted-foreground transition-colors duration-300 group-hover/links:text-primary"
                    />{" "}
                    {link.text}
                  </Link>
                );
              })}
            </div>
          </MenuItem>
          {NAVBAR_LIST.simpleLinks.map((link, index) => (
            <MenuLink
              key={index}
              setActive={setActive}
              active={active}
              href={link.href}
            >
              {link.text}
            </MenuLink>
          ))}
        </div>
        <div className="hidden w-48 items-center justify-end gap-2.5 lg:flex">
          <TooltipProvider openDelay={0}>
            {NAVBAR_LIST.socials.map((social, index) => (
              <SocialIcon key={index} social={social} />
            ))}
          </TooltipProvider>
        </div>
      </Menu>
    </div>
  );
}

function SocialIcon({
  social,
}: {
  social: (typeof NAVBAR_LIST.socials)[number];
}) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = social.icon;

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <Tooltip side="bottom" sideOffset={2}>
      <TooltipTrigger>
        <Link
          href={social.href}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <IconComponent
            className="size-10"
            bgColor="#ffffff00"
            color={isHovered ? "hsl(var(--primary))" : "#ffffff"}
          />
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <strong className="whitespace-nowrap">{social.name}</strong>
      </TooltipContent>
    </Tooltip>
  );
}
