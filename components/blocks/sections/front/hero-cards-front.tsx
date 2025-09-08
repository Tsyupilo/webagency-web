"use client";

import { botLinks } from "@/configs/options.config";
import { siteConfig } from "@/configs/site.config";
import { BotMessageSquare, Calculator, Rocket } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const cardsVariants = {
  hidden: {
    y: 10,
    opacity: 0,
    filter: "blur(4px)",
    scale: 0.96,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const BLOCK_CARDS = [
  {
    href: botLinks.telegram[siteConfig.site_lang],
    title: {
      en: "Support 24/7",
      ru: "Поддержка 24/7 ",
    },
    description: {
      en: "Ask a manager or bot in TG",
      ru: "Задайте вопрос менеджеру или боту в TG",
    },
    icon: <BotMessageSquare />,
  },
  {
    href: "/calculator",
    title: {
      en: "Service calculator",
      ru: " Калькулятор услуг",
    },
    description: {
      en: "Calculate the budget of your project",
      ru: "Рассчитайте бюджет вашего проекта",
    },
    icon: <Calculator />,
  },
  {
    href: "/services/quick-launch",
    title: {
      en: "Quick launch",
      ru: "Быстрый запуск ",
    },
    description: {
      en: "Launch your project in 1 неделю",
      ru: "Запуск сайта за 1 неделю",
    },
    icon: <Rocket />,
  },
];

const HeroCardsFront = () => {
  return (
    <section className="relative pb-front">
      <div className="container-mx-auto">
        <div className="flex w-full items-start justify-center gap-16">
          {BLOCK_CARDS.map((card, index) => (
            <motion.div
              key={index}
              variants={cardsVariants as any}
              initial="hidden"
              whileInView="visible"
            >
              <Link
                href={card.href}
                key={index}
                className="group flex items-center justify-center gap-3"
              >
                <div className="relative flex size-12 items-center justify-center overflow-hidden rounded-2xl border-2 border-accent/40 bg-gradient-to-tr from-accent/40 via-accent/10 to-accent/40 transition duration-500 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/10">
                  {/* top */}
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[200%] transition duration-500 group-hover:-translate-y-[50%] group-hover:text-primary">
                    {card.icon}
                  </span>
                  {/* bottom */}
                  <span className="transition duration-500 group-hover:translate-y-[200%] group-hover:text-primary">
                    {card.icon}
                  </span>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-base font-bold transition duration-500 group-hover:text-primary">
                    {card.title[siteConfig.site_lang]}
                  </h1>
                  <p className="text-sm text-muted-foreground transition duration-500 group-hover:text-primary/80">
                    {card.description[siteConfig.site_lang]}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCardsFront;
