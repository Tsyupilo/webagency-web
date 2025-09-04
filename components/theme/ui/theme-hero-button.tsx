import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import styles from "./theme-hero-button.module.css";

export default function ThemeHeroButton({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <motion.button
      className="relative"
      layoutId="button"
      transition={{ duration: 0.3, type: "spring" }}
    >
      <div className={styles.buttonGradient}></div>
      <div
        className={cn(
          "text-shadow-lg rounded-full border-none px-8 py-4 font-heading text-2xl uppercase text-card outline-none",
          styles.buttonBackground,
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </motion.button>
  );
}
