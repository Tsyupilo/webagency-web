"use client";
import { siteConfig } from "@/configs/site.config";
import { cn } from "@/lib/utils";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import {
  HoveredLink,
  Menu,
  MenuItem,
  MenuItemExpand,
  MenuLink,
  CategoryItem,
} from "./navbar-menu";
import ThemeButton from "../theme/ui/theme-button";
import {
  Book,
  Building2,
  EyeIcon,
  MessageCircle,
  MousePointerClick,
  Phone,
  User,
} from "lucide-react";
import { motion } from "motion/react";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveService(null);
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
        <Link href="/">
          <h3 className="sr-only">{siteConfig.site_name}</h3>
          <Image
            src={Logo}
            alt="Logo"
            width={203}
            height={33}
            className="invert dark:invert-0"
          ></Image>
        </Link>
        <div className="flex items-center">
          <MenuItemExpand setActive={setActive} active={active} item="Услуги">
            <div
              className="flex w-full flex-col gap-4 2xl:max-w-4xl"
              ref={menuRef}
            >
              <div className="grid w-full grid-cols-3 gap-4">
                <CategoryItem
                  tag="development"
                  setActive={setActiveService}
                  active={activeService}
                  title="Разработка сайтов"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                />
                <CategoryItem
                  tag="seo"
                  setActive={setActiveService}
                  active={activeService}
                  title="SEO оптимизация"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                />
                <CategoryItem
                  tag="marketing"
                  setActive={setActiveService}
                  active={activeService}
                  title="Маркетинг и контент"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                />
              </div>

              {/* Content Area */}
              <div className="w-full px-4">
                {/* Development Content */}
                <motion.div
                  layout
                  transition={{
                    type: "tween",
                    duration: 0.2,
                  }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={
                    activeService === "development"
                      ? { opacity: 1, height: "auto", filter: "blur(0)" }
                      : { opacity: 0, height: 0, filter: "blur(0.6rem)" }
                  }
                >
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <h4 className="mb-2 font-semibold text-muted-foreground">
                        По типу сайта
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/services/development/landing"
                            className="hover:text-primary"
                          >
                            Быстрый запуск
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/development/landing"
                            className="hover:text-primary"
                          >
                            Рекламные лендинги
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/development/corporate"
                            className="hover:text-primary"
                          >
                            Корпоративные сайты и блоги
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/development/shop"
                            className="hover:text-primary"
                          >
                            Интернет-магазины
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/development/catalog"
                            className="hover:text-primary"
                          >
                            Каталоги продукции
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/development/portfolio"
                            className="hover:text-primary"
                          >
                            Сайты-портфолио и визитки
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-muted-foreground">
                        По технологиям
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/services/development/wordpress"
                            className="hover:text-primary"
                          >
                            WordPress
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/development/nextjs"
                            className="hover:text-primary"
                          >
                            Next + WordPress
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/development/wordpress"
                            className="hover:text-primary"
                          >
                            Webflow
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/development/wordpress"
                            className="hover:text-primary"
                          >
                            Framer
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-muted-foreground">
                        Дополнительно
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/services/development/support"
                            className="hover:text-primary"
                          >
                            Автоматизация и AI
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/development/support"
                            className="hover:text-primary"
                          >
                            Интеграция CRM и веб-сервисов
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/development/adaptive"
                            className="hover:text-primary"
                          >
                            Дизайн для рекламных кампаний
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/development/seo"
                            className="hover:text-primary"
                          >
                            Техподдержка сайта
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/development/design"
                            className="hover:text-primary"
                          >
                            Аудит и оптимизация вашего сайта
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/development/support"
                            className="hover:text-primary"
                          >
                            Кастомные решения
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* SEO Content */}
                <motion.div
                  layout
                  transition={{
                    type: "tween",
                    duration: 0.2,
                  }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={
                    activeService === "seo"
                      ? { opacity: 1, height: "auto", filter: "blur(0)" }
                      : { opacity: 0, height: 0, filter: "blur(0.6rem)" }
                  }
                >
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <h4 className="mb-2 font-semibold text-muted-foreground">
                        По отраслям
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/services/seo/medicine"
                            className="hover:text-primary"
                          >
                            Медицина
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/real-estate"
                            className="hover:text-primary"
                          >
                            Агентство недвижимости
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/construction"
                            className="hover:text-primary"
                          >
                            Строительство
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/lawyers"
                            className="hover:text-primary"
                          >
                            Юриспруденция
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/accounting"
                            className="hover:text-primary"
                          >
                            Бухгалтерский учет
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/hotels"
                            className="hover:text-primary"
                          >
                            Отели
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/car-service"
                            className="hover:text-primary"
                          >
                            Автосервисы
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/advocates"
                            className="hover:text-primary"
                          >
                            Адвокаты
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/housing"
                            className="hover:text-primary"
                          >
                            Жилые комплексы
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-muted-foreground">
                        По виду продвижения
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/services/seo/traffic"
                            className="hover:text-primary"
                          >
                            По трафику
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/positions"
                            className="hover:text-primary"
                          >
                            По позициям
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/yandex"
                            className="hover:text-primary"
                          >
                            Продвижение в Яндекс
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/google"
                            className="hover:text-primary"
                          >
                            Продвижение в Google
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/turnkey"
                            className="hover:text-primary"
                          >
                            Под ключ
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/guaranteed"
                            className="hover:text-primary"
                          >
                            С гарантией
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/top10"
                            className="hover:text-primary"
                          >
                            В ТОП-10
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/sepo/complex"
                            className="hover:text-primary"
                          >
                            Комплексная оптимизация
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/internal"
                            className="hover:text-primary"
                          >
                            Внутренняя оптимизация
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-muted-foreground">
                        По ГЕО
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/services/seo/international"
                            className="hover:text-primary"
                          >
                            Зарубежное SEO
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/russia"
                            className="hover:text-primary"
                          >
                            По регионам РФ
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/cis"
                            className="hover:text-primary"
                          >
                            Продвижение в СНГ
                          </Link>
                        </li>
                      </ul>

                      <h4 className="mb-2 mt-6 font-semibold text-muted-foreground">
                        Другие услуги
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/services/seo/audit"
                            className="hover:text-primary"
                          >
                            Аудит
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/seo/search-engines"
                            className="hover:text-primary"
                          >
                            Продвижение в ПС
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Marketing Content */}
                <motion.div
                  layout
                  transition={{
                    type: "tween",
                    duration: 0.2,
                  }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={
                    activeService === "marketing"
                      ? { opacity: 1, height: "auto", filter: "blur(0)" }
                      : { opacity: 0, height: 0, filter: "blur(0.6rem)" }
                  }
                >
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <h4 className="mb-2 font-semibold text-muted-foreground">
                        Социальные сети
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/services/marketing/smm"
                            className="hover:text-primary"
                          >
                            SMM продвижение
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/marketing/target"
                            className="hover:text-primary"
                          >
                            Таргетированная реклама
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/marketing/community"
                            className="hover:text-primary"
                          >
                            Ведение сообществ
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/marketing/influencers"
                            className="hover:text-primary"
                          >
                            Работа с блогерами
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-muted-foreground">
                        Контент-маркетинг
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/services/marketing/content-strategy"
                            className="hover:text-primary"
                          >
                            Стратегия контента
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/marketing/blogging"
                            className="hover:text-primary"
                          >
                            Ведение блога
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/marketing/copywriting"
                            className="hover:text-primary"
                          >
                            Копирайтинг
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/marketing/email"
                            className="hover:text-primary"
                          >
                            Email-рассылки
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-muted-foreground">
                        Реклама и аналитика
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/services/marketing/context"
                            className="hover:text-primary"
                          >
                            Контекстная реклама
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/marketing/analytics"
                            className="hover:text-primary"
                          >
                            Веб-аналитика
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/marketing/crm"
                            className="hover:text-primary"
                          >
                            Внедрение CRM
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/marketing/strategy"
                            className="hover:text-primary"
                          >
                            Маркетинговая стратегия
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  layout
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={
                    !activeService
                      ? { opacity: 1, height: "auto", filter: "blur(0)" }
                      : { opacity: 0, height: 0, filter: "blur(0.6rem)" }
                  }
                  exit={{ opacity: 0, height: 0 }}
                  className="flex h-full w-full flex-col items-center justify-center text-balance text-center text-muted-foreground"
                >
                  <EyeIcon size={24} />
                  <span>
                    Выберите нужную категорию, чтобы посмотреть список услуг
                  </span>
                </motion.div>
              </div>
            </div>
          </MenuItemExpand>
          <MenuItem setActive={setActive} active={active} item="О нас">
            <div className="flex flex-col gap-5 text-base">
              <Link
                href="/about"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Building2 size={24} className="text-muted-foreground" /> Об
                агентстве
              </Link>
              <Link
                href="/posts"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Book size={24} className="text-muted-foreground" /> Блог
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 hover:text-primary"
              >
                <User size={24} className="text-muted-foreground" /> Партнерская
                программа
              </Link>
              <Link
                href="/contacts"
                className="flex items-center gap-2 hover:text-primary"
              >
                <MessageCircle size={24} className="text-muted-foreground" />{" "}
                Обсудить проект
              </Link>
              <Link
                href="/contacts"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Phone size={24} className="text-muted-foreground" /> Контакты
              </Link>
            </div>
          </MenuItem>
          <MenuLink setActive={setActive} active={active} href="/portfolio">
            Портфолио
          </MenuLink>
          <MenuLink setActive={setActive} active={active} href="/blog">
            Блог
          </MenuLink>
          <MenuLink setActive={setActive} active={active} href="/about">
            О нас
          </MenuLink>
          <MenuLink setActive={setActive} active={active} href="/contacts">
            Контакты
          </MenuLink>
        </div>
        <div className="hidden lg:block">
          <ThemeButton>
            Написать нам <MessageCircle className="h-4.5 w-4.5" />
          </ThemeButton>
        </div>
      </Menu>
    </div>
  );
}
