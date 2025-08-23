"use client";

import { Navbar } from "./navbar";
import { MobileNav } from "./mobile-nav";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const NavbarContainer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      animate={
        isScrolled
          ? {
              width: "1440px",
            }
          : { width: "100%" }
      }
      transition={{ duration: 1 }}
      id="nav-container"
      className={cn(
        "left-0 top-0 mx-auto flex w-full items-center justify-between px-4",
      )}
    >
      <div id="desktop" className="hidden w-full md:block">
        <Navbar />
      </div>
      <div id="mobile" className="w-full md:hidden">
        <MobileNav />
      </div>
    </motion.div>
  );
};
