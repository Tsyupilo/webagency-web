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
              translateY: "1rem",
              maxWidth: "1520px",
              backdropFilter: "blur(10px)",
              background: "hsl(var(--card) / 0.4);",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }
          : {
              maxWidth: "2560px",
              backdropFilter: "blur(0px)",
              background: "transparent",
              border: "none",
            }
      }
      transition={{ duration: 0.5, type: "spring", stiffness: 40 }}
      id="nav-container"
      className={cn(
        "left-0 top-0 mx-auto flex w-full items-center justify-between rounded-full px-4",
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
