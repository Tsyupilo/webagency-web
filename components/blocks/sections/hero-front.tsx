"use client";

import { HeroHighlight } from "@/components/assets/textures/hero-highlight";
import ThemeButton from "@/components/theme/ui/theme-button";
import { MessageCircleIcon } from "@/components/ui/icons/message-circle-icon";
import LightRays from "@/components/ui/light-rays";
import SplitText from "@/components/ui/split-text";
import { siteConfig } from "@/configs/site.config";
import { Gift } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export interface HeroFrontProps {
  image: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  title: string;
  description: string;
}

export default function HeroFront({ fields }: { fields: HeroFrontProps }) {
  if (!fields) return null;

  return (
    <section data-slot="hero" className="relative pb-front pt-front-hero">
      <div data-slot="background">
        <motion.div
          className="absolute left-0 top-0 -z-20 h-full w-full gradient-mask-b-0"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <LightRays
            raysOrigin="top-center"
            raysColor="#AED7E8"
            raysSpeed={0.8}
            lightSpread={1}
            rayLength={1.2}
            followMouse={false}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </motion.div>
      </div>

      <div data-slot="container" className="container mx-auto h-full">
        <div
          data-slot="content"
          className="flex h-full w-full flex-col items-center justify-center gap-6"
        >
          <div
            data-slot="heading"
            className="flex w-full flex-col items-center justify-center gap-12"
          >
            <div className="relative flex flex-col items-center gap-6">
              <HeroFrontTitle originTitle={fields.title} />
              <motion.div
                data-slot="description"
                className="flex flex-col text-center text-2xl leading-tight text-accent-foreground"
                dangerouslySetInnerHTML={{ __html: fields.description }}
                initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
              ></motion.div>
            </div>

            <HeroFrontButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroFrontTitle({ originTitle }: { originTitle: string }) {
  const BLOCK_TITLE = {
    ru: {
      start: "Мы делаем",
      target: "сайты, ",
      end: "которые приводят клиентов.",
      end2: "Быстро.",
    },
    en: {
      start: "We create",
      target: "websites, ",
      end: "that bring customers.",
      end2: "Fast.",
    },
  };

  return (
    <motion.h1
      data-slot="title"
      data-title={originTitle}
      className="text-balance text-center font-heading text-6xl leading-none tracking-tight text-foreground"
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      <motion.span
        initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {BLOCK_TITLE[siteConfig.site_lang].start}
      </motion.span>{" "}
      {"\n"}
      <motion.span
        className="relative inline-block text-primary"
        initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <span className="absolute left-1/2 top-1/2 mt-2 h-full w-full -translate-x-1/2 -translate-y-1/2">
          <HeroHighlight />
        </span>
        <motion.span
          style={{ textShadow: "0 0 48px hsla(var(--primary) / 0.8)" }}
          animate={{
            opacity: [1, 1, 1, 0.8, 1, 1, 1, 1, 1, 1, 0.8, 1, 0.8, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
        >
          {BLOCK_TITLE[siteConfig.site_lang].target}
        </motion.span>
      </motion.span>{" "}
      <motion.span
        initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        {BLOCK_TITLE[siteConfig.site_lang].end}
      </motion.span>
      {"\n"}{" "}
      <motion.span
        className="text-primary"
        initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, delay: 1.1 }}
      >
        {BLOCK_TITLE[siteConfig.site_lang].end2}
      </motion.span>
    </motion.h1>
  );
}

function HeroFrontButton() {
  const [startAnimation, setStartAnimation] = useState(false);
  const BLOCK_DESCRIPTION = {
    ru: {
      title: "Обсудим ваш проект",
      description: "Бесплатная консультация, составление брифа и ТЗ",
    },
    en: {
      title: "Discuss your project",
      description: "Get free consultation, brief and project plan",
    },
  };
  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 1500);
  }, [startAnimation]);
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 25, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 16,
        mass: 1.2,
        delay: 1.5,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 16,
          mass: 1.2,
          delay: 1.7,
        }}
      >
        <ThemeButton>
          {BLOCK_DESCRIPTION[siteConfig.site_lang].title}
          <MessageCircleIcon size={20} />
        </ThemeButton>
      </motion.div>

      <motion.div
        className="inline-flex items-center gap-2 text-center text-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.9 }}
      >
        <Gift size={14} className="text-primary" />{" "}
        {startAnimation && (
          <SplitText
            text={BLOCK_DESCRIPTION[siteConfig.site_lang].description}
            delay={80}
            duration={0.4}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            to={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            threshold={0.1}
            rootMargin="-10px"
            className="overflow-visible font-semibold leading-none text-primary"
          />
        )}
      </motion.div>
    </motion.div>
  );
}
