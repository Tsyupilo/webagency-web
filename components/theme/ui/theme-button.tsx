"use client";
import type { ButtonProps } from "@/components/ui/button";
import { AnimateIcon } from "@/components/ui/icons/icon";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";
import { HoverBorderGradient } from "../../ui/hover-border-gradient";

interface ParticleButtonProps extends ButtonProps {
  onSuccess?: () => void;
  iconType?: string;
  successDuration?: number;
  sizes?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const themeButtonVariants = cva(
  "flex items-center space-x-2 bg-primary px-16 py-3 font-heading text-xl uppercase text-background",
  {
    variants: {
      sizes: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-16 py-3 text-lg",
      },
    },
    defaultVariants: {
      sizes: "md",
    },
  },
);

export default function ThemeButton({
  children,
  onClick,
  onSuccess,
  iconType,
  successDuration = 1000,
  className,
  sizes,
  asChild,
  ...props
}: ParticleButtonProps) {
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
      }, successDuration);
    }
  };

  return (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as={asChild ? "div" : "button"}
      className={cn(themeButtonVariants({ sizes, className }))}
      onClick={handleClick}
      {...props}
    >
      <AnimateIcon animateOnHover>
        <span>
          <span
            className={cn(
              "relative z-10 inline-flex items-center gap-2",
              className,
            )}
          >
            {children}
          </span>
          <span className="absolute inset-0 -z-10"></span>
        </span>
      </AnimateIcon>
    </HoverBorderGradient>
  );
}
