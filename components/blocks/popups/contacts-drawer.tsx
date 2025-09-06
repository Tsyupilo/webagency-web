"use client";

/**
 * @author: @dorian_baffier
 * @description: Smooth Drawer
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import * as React from "react";

import {
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/assets/icons/socials/telegram";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { AnimateIcon } from "@/components/ui/icons/icon";
import { MessageCircle } from "@/components/ui/icons/message-circle-icon";
import { motion } from "motion/react";
import Link from "next/link";

interface PriceTagProps {
  price: number;
  discountedPrice: number;
}

/**
 * @temp
 */
function PriceTag({ price, discountedPrice }: PriceTagProps) {
  return (
    <div className="mx-auto flex max-w-fit items-center justify-around gap-4">
      <div className="flex items-baseline gap-2">
        <span className="bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-zinc-300">
          ${discountedPrice}
        </span>
        <span className="text-lg text-zinc-400 line-through dark:text-zinc-500">
          ${price}
        </span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Lifetime access
        </span>
        <span className="text-xs text-zinc-700 dark:text-zinc-300">
          One-time payment
        </span>
      </div>
    </div>
  );
}

const drawerVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
    rotateX: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
  },
};

interface DrawerDemoProps extends React.HTMLAttributes<HTMLDivElement> {
  currentState: "open" | "closed";
  setCurrentState: (state: "open" | "closed") => void;
  setDialogState?: (state: "open" | "closed") => void;
}

export default function ContactsDrawer({
  currentState,
  setCurrentState,
  setDialogState,
}: DrawerDemoProps) {
  return (
    <Drawer
      onOpenChange={(open) => setCurrentState(open ? "open" : "closed")}
      open={currentState === "open"}
    >
      <DrawerContent className="mx-auto max-w-fit">
        <motion.div
          variants={drawerVariants as any}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-md space-y-2"
        >
          <motion.div variants={itemVariants as any}>
            <DrawerHeader className="space-y-2.5 px-0">
              <DrawerTitle>
                <AnimateIcon animateOnHover={true} animateOnTap={true}>
                  <div className="flex items-center gap-3 text-2xl font-semibold tracking-tighter">
                    <motion.div variants={itemVariants as any}>
                      <MessageCircle className="size-8" />
                    </motion.div>
                    <motion.span
                      variants={itemVariants as any}
                      className="text-4xl font-bold"
                    >
                      Давайте пообщаемся
                    </motion.span>
                  </div>
                </AnimateIcon>
              </DrawerTitle>
              <motion.div variants={itemVariants as any}>
                <DrawerDescription className="text-base">
                  Просто оставьте заявку через нашу контактную форму,
                  либо&nbsp;начните чат в Telegram или WhatsApp
                </DrawerDescription>
              </motion.div>
            </DrawerHeader>
          </motion.div>

          <motion.div variants={itemVariants as any}>
            <DrawerFooter className="flex flex-col gap-3 px-0">
              <Link
                href="https://t.me/wwwizards"
                target="_blank"
                className="hover:brightness-120 group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-full bg-socials-telegram/100 font-heading text-base leading-none tracking-wide text-accent-foreground transition-all duration-500"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex items-center gap-2 uppercase tracking-tighter"
                >
                  Начать чат в Telegram
                  <motion.div
                    animate={{
                      rotate: [0, 15, -15, 0],
                      y: [0, -2, 2, 0],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 1,
                    }}
                  >
                    <TelegramIcon bgColor="transparent" className="size-10" />
                  </motion.div>
                </motion.div>
              </Link>
              <Link
                href="https://wa.me/79819063818"
                target="_blank"
                className="hover:brightness-120 group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-full bg-socials-whatsapp/100 font-heading text-base leading-none tracking-wide text-accent-foreground transition-all duration-500"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex items-center gap-2 uppercase tracking-tighter"
                >
                  Начать чат в WhatsApp
                  <motion.div
                    animate={{
                      rotate: [0, 15, -15, 0],
                      y: [0, -2, 2, 0],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 1,
                    }}
                  >
                    <WhatsAppIcon bgColor="transparent" className="size-10" />
                  </motion.div>
                </motion.div>
              </Link>
              {setDialogState && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setDialogState("open");
                    setCurrentState("closed");
                  }}
                  className="font-regular h-12 w-full rounded-full font-heading text-base uppercase tracking-tighter transition-colors hover:bg-card"
                >
                  Оставить заявку
                </Button>
              )}
            </DrawerFooter>
          </motion.div>
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
}
