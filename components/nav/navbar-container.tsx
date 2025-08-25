"use client";

import { Navbar } from "./navbar";
import { MobileNav } from "./mobile-nav";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";

export const NavbarContainer = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [previousPosition, setPreviousPosition] = useState(0);
  const HIDE_NAV_POSITION = 500;
  const NAV_INITIAL_STATES = {
    default: {
      maxWidth: "2560px",
      translateY: "0rem",
      backdropFilter: "blur(0px)",
      background: "hsl(var(--card) / 0)",
      border: "1px solid rgba(255, 255, 255, 0)",
    },
    scrolled: {
      translateY: "1rem",
      maxWidth: "1520px",
      backdropFilter: "blur(10px)",
      background: "hsl(var(--card) / 0.4)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    hidden: {
      translateY: "-5rem",
      maxWidth: "1520px",
      backdropFilter: "blur(10px)",
      background: "hsl(var(--card) / 0.4)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
  };

  const handleScroll = (currentPosition: number) => {
    if (previousPosition > currentPosition) {
      setHideNav(false); // scrolling up, show nav
    } else if (
      currentPosition > previousPosition &&
      currentPosition > HIDE_NAV_POSITION
    ) {
      setHideNav(true); // scrolling down and past 200px, hide nav
    }

    setPreviousPosition(currentPosition);
  };

  useEffect(() => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    window.addEventListener("scroll", () => handleScroll(window.scrollY));

    return () => {
      window.removeEventListener("scroll", () => handleScroll(window.scrollY));
    };
  }, [hideNav, isScrolled, previousPosition]);

  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={NAV_INITIAL_STATES.default}
      animate={
        hideNav
          ? NAV_INITIAL_STATES.hidden
          : isScrolled
            ? NAV_INITIAL_STATES.scrolled
            : NAV_INITIAL_STATES.default
      }
      transition={{ duration: 0.8, type: "tween", stiffness: 100 }}
      id="nav-container"
      className={cn(
        "mx-auto flex w-full items-center justify-between rounded-full",
      )}
    >
      {isMobile ? (
        <div id="mobile" className="w-full">
          <MobileNav />
        </div>
      ) : (
        <div id="desktop" className="w-full">
          <Navbar />
        </div>
      )}
    </motion.div>
  );
};
