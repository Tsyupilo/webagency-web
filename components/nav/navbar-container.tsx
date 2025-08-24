"use client";

import { Navbar } from "./navbar";
import { MobileNav } from "./mobile-nav";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const NavbarContainer = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [previousPosition, setPreviousPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      console.log(previousPosition, currentPosition);
      if (previousPosition > currentPosition) {
        setHideNav(false); // scrolling up, show nav
      } else if (currentPosition > previousPosition && currentPosition > 400) {
        setHideNav(true); // scrolling down and past 200px, hide nav
      }

      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setPreviousPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hideNav, isScrolled, previousPosition]);

  return (
    <motion.div
      animate={
        hideNav
          ? {
              translateY: "-10rem",
              maxWidth: "1520px",
              backdropFilter: "blur(10px)",
              background: "hsl(var(--card) / 0.4);",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }
          : isScrolled
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
      transition={{ duration: 0.8, type: "tween", stiffness: 100 }}
      id="nav-container"
      className={cn(
        "mx-auto flex w-full items-center justify-between rounded-full",
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
