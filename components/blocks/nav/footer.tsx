"use client";

import { Logo } from "@/components/assets/icons/logo";
import {
  InstagramIcon,
  TelegramIcon,
  VKIcon,
  WhatsAppIcon,
} from "@/components/assets/icons/socials/telegram";
import ContactsDialog from "@/components/blocks/popups/contacts-dialog";
import ContactsDrawer from "@/components/blocks/popups/contacts-drawer";
import ThemeButton from "@/components/theme/ui/theme-button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { contentMenu, mainMenu, menuHeadings } from "@/configs/menu.config";
import { contactLinks, socialLinks } from "@/configs/options.config";
import { siteConfig } from "@/configs/site.config";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const FOOTER_CONTENT = {
  start: {
    en: "Contact us",
    ru: "Связаться с нами",
  },
  phone_description: {
    en: "Call us or write to us on the email. We will answer all your questions in detail",
    ru: "Позвоните нам, мы ответим на все вопросы",
  },
  email_description: {
    en: "Call us or write to us on the email. We will answer all your questions in detail",
    ru: "Пишите в любое время 24/7",
  },
  we_in: {
    en: "We in",
    ru: "Мы в",
  },
};

const Footer = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: "5%",
        scale: 0.98,
        filter: "blur(4px)",
      }}
      animate={{
        opacity: 1,
        y: "0",
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="container mx-auto flex w-full flex-col gap-4 py-16"
    >
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-12">
        <div className="col-span-3 flex w-full items-start gap-12">
          <FooterInfo />
        </div>
        <div className="col-span-6 flex gap-12">
          <FooterMenu />
        </div>
        <div className="col-span-3 flex flex-col gap-12">
          <FooterSocials />
        </div>
      </div>
      <FooterCopyright />
    </motion.section>
  );
};

const FooterCopyright = () => {
  return (
    <div className="not-prose mt-4 flex flex-col justify-between gap-6 border-t pt-4 md:mt-8 md:flex-row md:items-center md:gap-2 md:pt-8">
      <div className="flex gap-6 text-muted-foreground">
        <Link
          href="/privacy-policy"
          className="transition-colors duration-300 hover:text-primary"
        >
          Политика конфиденциальности
        </Link>
        <Link
          href="/terms-of-use"
          className="transition-colors duration-300 hover:text-primary"
        >
          Условия обработки данных
        </Link>
      </div>
      <p className="text-muted-foreground">
        {new Date().getFullYear()} &copy; | {siteConfig.site_name}
      </p>
    </div>
  );
};

const FooterSocials = () => {
  const animation = {
    scale: 1.2,
    y: -4,
    rotate: 2,
    filter: "drop-shadow(0 14px 14px hsla(var(--primary) / 0.25))",
  };
  return (
    <>
      <div className="flex flex-col items-end gap-2">
        <a
          className="font-heading text-lg leading-none tracking-tight transition duration-300 hover:text-primary hover:drop-shadow-primary"
          target="_blank"
          href={`tel:${contactLinks.phone[siteConfig.site_lang].replace(/ /g, "")}`}
        >
          {contactLinks.phone[siteConfig.site_lang]}
        </a>
        <p className="text-right text-sm text-muted-foreground">
          {FOOTER_CONTENT.phone_description[siteConfig.site_lang]}
        </p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <a
          className="font-heading text-lg leading-none tracking-tight transition duration-300 hover:text-primary hover:drop-shadow-primary"
          target="_blank"
          href={`mailto:${contactLinks.email[siteConfig.site_lang].replace(/ /g, "")}`}
        >
          {contactLinks.email[siteConfig.site_lang]}
        </a>
        <p className="text-right text-sm text-muted-foreground">
          {FOOTER_CONTENT.email_description[siteConfig.site_lang]}
        </p>
      </div>
      <div className="flex items-center justify-end">
        <TooltipProvider openDelay={0} closeDelay={0}>
          <Tooltip side="bottom" sideOffset={12}>
            <TooltipTrigger>
              <motion.div
                initial={{
                  filter: "drop-shadow(0 0 0px hsla(var(--primary) / 0))",
                }}
                whileHover={animation}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                  mass: 0.2,
                  damping: 10,
                }}
                className="pr-1"
              >
                <Link href={socialLinks.telegram[siteConfig.site_lang]}>
                  <TelegramIcon className="size-10" />
                </Link>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <strong>
                {FOOTER_CONTENT.we_in[siteConfig.site_lang]} Telegram
              </strong>
            </TooltipContent>
          </Tooltip>
          <Tooltip side="bottom" sideOffset={12}>
            <TooltipTrigger>
              <motion.div
                initial={{
                  filter: "drop-shadow(0 0 0px hsla(var(--primary) / 0))",
                }}
                whileHover={animation}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                  mass: 0.2,
                  damping: 10,
                }}
                className="px-1"
              >
                <Link href={socialLinks.whatsapp[siteConfig.site_lang]}>
                  <WhatsAppIcon className="size-10" />
                </Link>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <strong>
                {FOOTER_CONTENT.we_in[siteConfig.site_lang]} WhatsApp
              </strong>
            </TooltipContent>
          </Tooltip>
          <Tooltip side="bottom" sideOffset={12}>
            <TooltipTrigger>
              <motion.div
                initial={{
                  filter: "drop-shadow(0 0 0px hsla(var(--primary) / 0))",
                }}
                whileHover={animation}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                  mass: 0.2,
                  damping: 10,
                }}
                className="px-1"
              >
                <Link href={socialLinks.vk[siteConfig.site_lang]}>
                  <VKIcon className="size-10" />
                </Link>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <strong>{FOOTER_CONTENT.we_in[siteConfig.site_lang]} VK</strong>
            </TooltipContent>
          </Tooltip>
          <Tooltip side="bottom" sideOffset={12}>
            <TooltipTrigger>
              <motion.div
                initial={{
                  filter: "drop-shadow(0 0 0px hsla(var(--primary) / 0))",
                }}
                whileHover={animation}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                  mass: 0.2,
                  damping: 10,
                }}
                className="pl-1"
              >
                <Link href={socialLinks.insta[siteConfig.site_lang]}>
                  <InstagramIcon className="size-10" />
                </Link>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <strong className="whitespace-nowrap">Мы в Instagram</strong>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
};

const FooterMenu = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h5 className="text-base font-medium text-muted-foreground">
          {menuHeadings.about[siteConfig.site_lang]}
        </h5>
        <ul className="flex flex-col gap-2">
          {Object.entries(mainMenu).map(([key, item]) => (
            <Link
              className="transition-colors duration-300 hover:text-primary"
              key={item.href}
              href={item.href}
            >
              {item.label[siteConfig.site_lang]}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="text-base font-medium text-muted-foreground">
          {menuHeadings.services[siteConfig.site_lang]}
        </h5>
        <ul className="grid grid-flow-col grid-cols-2 grid-rows-6 gap-x-12 gap-y-2">
          {Object.entries(contentMenu).map(([key, item]) => (
            <Link
              className="transition-colors duration-300 hover:text-primary"
              key={item.href}
              href={item.href}
            >
              {item.label[siteConfig.site_lang]}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

const FooterInfo = () => {
  const [drawerState, setDrawerState] = useState<"open" | "closed">("closed");
  const [dialogState, setDialogState] = useState<"open" | "closed">("closed");

  return (
    <div className="not-prose flex w-full max-w-xs flex-col gap-4">
      <Link href="/">
        <h3 className="sr-only">{siteConfig.site_name}</h3>
        <Logo />
      </Link>
      <p className="mb-2 text-sm text-muted-foreground">
        {siteConfig.site_description[siteConfig.site_lang]}
      </p>
      <ThemeButton
        variant="outline"
        sizes="sm"
        onClick={() => setDrawerState("open")}
      >
        <span>{FOOTER_CONTENT.start[siteConfig.site_lang]}</span>
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
    </div>
  );
};

export { Footer };
