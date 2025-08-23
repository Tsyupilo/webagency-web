"use client";

/**
 * @author: @dorian_baffier
 * @description: Particle Button
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { useState, useRef, type RefObject } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/components/ui/button";
import { MousePointerClick } from "lucide-react";

interface ParticleButtonProps extends ButtonProps {
  onSuccess?: () => void;
  successDuration?: number;
}

function SuccessParticles({
  buttonRef,
}: {
  buttonRef: React.RefObject<HTMLButtonElement>;
}) {
  const rect = buttonRef.current?.getBoundingClientRect();
  if (!rect) return null;

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  console.log(rect);

  return (
    <AnimatePresence>
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute z-20 h-1 w-1 rounded-full bg-black dark:bg-white"
          style={{
            left: "50%",
            top: "0",
            width: Math.random() * 2 + 6,
            height: Math.random() * 2 + 6,
          }}
          initial={{
            scale: 0,
            x: 0,
            y: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            x: [0, (i % 2 ? 1 : -1) * (Math.random() * 50 + 10)],
            y: [0, -Math.random() * 50 - 20],
          }}
          transition={{
            duration: 0.5,
            delay: i * 0.1 + 0.4,
            ease: "easeOut",
          }}
        />
      ))}
    </AnimatePresence>
  );
}

export default function ThemeButton({
  children,
  onClick,
  onSuccess,
  successDuration = 2000,
  className,
  ...props
}: ParticleButtonProps) {
  const [showParticles, setShowParticles] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowParticles(true);

    setTimeout(() => {
      setShowParticles(false);
    }, successDuration);
  };

  return (
    <div className="relative">
      {showParticles && (
        <SuccessParticles
          buttonRef={buttonRef as RefObject<HTMLButtonElement>}
        />
      )}
      <motion.button
        ref={buttonRef}
        onClick={handleClick}
        animate={
          showParticles
            ? {
                scale: 0.92,
                y: 2,
              }
            : { scale: 1, y: 0 }
        }
        transition={{ duration: 0.2, type: "spring" }}
        className={cn(
          "relative",
          "flex items-center gap-2 px-5 py-3",
          "rounded-full",
          "bg-primary-light hover:bg-primary-light",
          "font-heading text-lg uppercase leading-none text-black",
          "transition-all duration-700",
          `shadow-0 hover:shadow-button-default`,
          showParticles &&
            `!bg-primary-lighter shadow-button-triggered hover:shadow-button-triggered`,
          className,
        )}
      >
        {children}
      </motion.button>
    </div>
  );
}
