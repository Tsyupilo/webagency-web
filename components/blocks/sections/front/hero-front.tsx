"use client";

import { HeroHighlight } from "@/components/assets/textures/hero-highlight";
import { HeroRays } from "@/components/assets/textures/hero-rays";
import ContactsDialog from "@/components/blocks/popups/contacts-dialog";
import ContactsDrawer from "@/components/blocks/popups/contacts-drawer";
import ThemeButton from "@/components/theme/ui/theme-button";
import { MessageCircleIcon } from "@/components/ui/icons/message-circle-icon";
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
    <section className="relative">
      <div>
        <motion.div
          className="absolute left-0 top-0 -z-20 h-full w-full origin-top gradient-mask-b-0"
          initial={{
            opacity: 0,
            filter: "blur(8px)",
            scale: 0.8,
            y: -140,
          }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1.5, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <HeroRays />
        </motion.div>
      </div>

      <div className="container mx-auto flex h-screen max-h-[60rem] min-h-[50rem] flex-col items-center justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center gap-6">
          <div className="flex w-full flex-col items-center justify-center gap-12">
            <div className="relative flex flex-col items-center gap-6">
              <HeroFrontTitle originTitle={fields.title} />
              <motion.div
                data-slot="description"
                className="flex flex-col text-center text-2xl leading-tight text-accent-foreground"
                dangerouslySetInnerHTML={{ __html: fields.description }}
                initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
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
    start: {
      en: "We create",
      ru: "Мы делаем",
    },
    target: {
      en: "websites, ",
      ru: "сайты, ",
    },
    end: {
      en: "that bring customers.",
      ru: "которые приводят клиентов.",
    },
    end2: {
      en: "Fast.",
      ru: "Быстро.",
    },
  };

  return (
    <motion.h1
      data-title={originTitle}
      className="text-balance text-center font-heading text-6xl leading-none tracking-tight text-foreground"
      initial={{ opacity: 0, y: 20, filter: "blur(8px)", scale: 0.8 }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
    >
      <motion.span
        initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {BLOCK_TITLE.start[siteConfig.site_lang]}
      </motion.span>{" "}
      {"\n"}
      <motion.span
        className="relative inline-block text-primary"
        initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, delay: 0.5 }}
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
          {BLOCK_TITLE.target[siteConfig.site_lang]}
        </motion.span>
      </motion.span>{" "}
      <motion.span
        initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        {BLOCK_TITLE.end[siteConfig.site_lang]}
      </motion.span>
      {"\n"}{" "}
      <motion.span
        className="text-primary"
        initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        {BLOCK_TITLE.end2[siteConfig.site_lang]}
      </motion.span>
    </motion.h1>
  );
}

function HeroFrontButton() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [drawerState, setDrawerState] = useState<"open" | "closed">("closed");
  const [dialogState, setDialogState] = useState<"open" | "closed">("closed");
  const BLOCK_DESCRIPTION = {
    title: {
      en: "Discuss your project",
      ru: "Обсудим ваш проект",
    },
    description: {
      en: "Get free consultation, brief and project plan",
      ru: "Бесплатная консультация, составление брифа и ТЗ",
    },
  };
  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 1000);
  }, [startAnimation]);
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 40, filter: "blur(6px)", scale: 0.9 }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: 0.7,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
          delay: 1,
        }}
      >
        <ThemeButton sizes="lg" onClick={() => setDrawerState("open")}>
          {BLOCK_DESCRIPTION.title[siteConfig.site_lang]}
          <MessageCircleIcon size={20} />
        </ThemeButton>
        <ContactsDrawer
          currentState={drawerState}
          setCurrentState={setDrawerState}
          setDialogState={setDialogState}
        />
        <ContactsDialog
          currentState={dialogState}
          setCurrentState={setDialogState}
        />
      </motion.div>
      {/* startAnimation el */}
      <motion.div
        className="inline-flex items-center gap-2 text-center text-sm"
        initial={{ opacity: 0 }}
        animate={startAnimation && { opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Gift size={14} className="text-primary" />{" "}
        <SplitText
          text={BLOCK_DESCRIPTION.description[siteConfig.site_lang]}
          delay={40}
          duration={0.1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          to={
            startAnimation
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 0, filter: "blur(0px)" }
          }
          threshold={0.1}
          rootMargin="-10px"
          className="overflow-visible font-semibold leading-none text-primary"
        />
      </motion.div>
    </motion.div>
  );
}
