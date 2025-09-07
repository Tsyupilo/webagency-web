"use client";
import { AnimateIcon } from "@/components/ui/icons/icon";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";
import { HoverBorderGradient } from "../../ui/hover-border-gradient";

interface ParticleButtonProps {
  onSuccess?: () => void;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  iconType?: string;
  successDuration?: number;
  sizes?: "sm" | "md" | "lg";
  divChild?: boolean;
  variant?: "default" | "outline";
  fillWidth?: boolean;
}

const themeButtonVariants = cva(
  "flex items-center space-x-2 font-heading font-medium uppercase",
  {
    variants: {
      sizes: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-16 py-3 text-lg",
      },
      variant: {
        default: "bg-primary text-background",
        outline: "bg-background text-primary ",
      },
    },
    defaultVariants: {
      sizes: "md",
      variant: "default",
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
  variant,
  sizes,
  divChild,
  fillWidth = false,
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
      as={divChild ? "div" : "button"}
      className={cn(themeButtonVariants({ sizes, variant, className }))}
      onClick={handleClick}
      fillWidth={fillWidth}
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
