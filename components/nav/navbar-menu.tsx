"use client";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, Transition } from "motion/react";
import Link from "next/link";
import React from "react";

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseLeave={() => setActive(null)} className="group relative">
      <motion.p
        onMouseEnter={() => setActive(item)}
        transition={{ duration: 0.3 }}
        className="flex cursor-default items-center gap-1 px-4 py-1.5 text-lg font-bold text-foreground transition duration-300 group-hover:text-primary group-hover:opacity-[0.9] dark:group-hover:text-primary"
      >
        {item}
        <ChevronDown className="h-5 w-5 transition-all duration-300 group-hover:rotate-180" />
      </motion.p>
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="menuitem-dropdown"
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={transition}
          >
            {active === item && (
              <div className="absolute pt-2">
                <motion.div
                  transition={transition}
                  layoutId="active" // layoutId ensures smooth animation
                  className="overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur dark:border-white/[0.2] dark:bg-card"
                >
                  <motion.div
                    layout // layout ensures smooth animation
                    className="h-full w-max p-4"
                  >
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const MenuLink = ({
  setActive,
  active,
  href,
  children,
}: {
  setActive: (item: null) => void;
  active: string | null;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(null)} className="relative">
      <Link
        href={href}
        className="block px-4 py-1.5 text-lg font-bold text-foreground transition duration-300 hover:text-primary dark:hover:text-primary"
      >
        {children}
      </Link>
    </div>
  );
};

export const MenuItemExpand = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseLeave={() => setActive(null)}
      className="group static 2xl:relative"
    >
      <motion.p
        onMouseEnter={() => setActive(item)}
        transition={{ duration: 0.3 }}
        className="flex cursor-default items-center gap-1 px-4 py-1.5 text-lg font-bold text-foreground transition duration-300 group-hover:text-primary group-hover:opacity-[0.9] dark:group-hover:text-primary"
      >
        {item}
        <ChevronDown className="h-5 w-5 transition-all duration-300 group-hover:rotate-180" />
      </motion.p>
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="menuitem-dropdown"
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={transition}
            className="absolute left-0 w-full"
          >
            {active === item && (
              <div className="static left-0 w-full pt-2 2xl:w-max">
                <motion.div
                  transition={transition}
                  layoutId="active" // layoutId ensures smooth animation
                  className="overflow-hidden rounded-2xl border border-black/[0.2] bg-white/40 shadow-xl backdrop-blur dark:border-white/[0.2] dark:bg-card"
                >
                  <motion.div
                    layout // layout ensures smooth animation
                    className="h-full w-full p-4 2xl:w-max"
                  >
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="mb-1 text-xl font-bold text-black dark:text-white">
          {title}
        </h4>
        <p className="max-w-[10rem] text-sm text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const CategoryItem = ({
  tag,
  title,
  setActive,
  active,
  src,
}: {
  tag: string;
  title: string;
  setActive: (item: string | null) => void;
  active: string | null;
  src: string;
}) => {
  return (
    <button
      onClick={() => setActive(tag)}
      className={cn(
        "flex items-center gap-2 rounded-lg border border-white/0 p-4",
        active === tag
          ? "border-white/20 bg-background"
          : "hover:bg-background/20",
      )}
    >
      <img
        src={src}
        width={60}
        height={60}
        alt={title}
        className="h-full rounded-md shadow-2xl"
      />
      <div>
        <h4
          className={cn(
            "text-balance text-left text-lg font-bold leading-tight",
            active === tag ? "text-foreground" : "text-muted-foreground",
          )}
        >
          {title}
        </h4>
      </div>
    </button>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 transition duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
    >
      {children}
    </a>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative flex items-center justify-between gap-4 px-6 py-4"
    >
      {children}
    </nav>
  );
};
