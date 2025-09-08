"use client";

import { cn } from "@/lib/utils";
import { motion, Transition, Variants } from "motion/react";
import Heading from "../../basic/heading";

const blockVariants: Variants = {
  hidden: {
    y: 10,
    opacity: 0,
    filter: "blur(4px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
};

const transition: Transition = {
  duration: 0.7,
  ease: "easeInOut",
};

const services = {
  title: "Наши услуги",
  description:
    "Знаем толк в коде, трафике и продажах. <br/> Полный цикл услуг — быстро, точно, без лишнего.",
  tag: "Услуги",
};

interface ServicesGridProps {
  space: "front" | "inner";
  className?: string;
}

const ServicesGrid = ({ space = "inner", className }: ServicesGridProps) => {
  let spaceClass: "pt-front" | "pt-inner";
  switch (space) {
    case "front":
      spaceClass = "pt-front";
      break;
    case "inner":
      spaceClass = "pt-inner";
  }

  return (
    <motion.section
      variants={blockVariants}
      initial="hidden"
      whileInView="visible"
      transition={transition}
      className={cn(spaceClass, className)}
    >
      <div className="container mx-auto flex flex-col items-center">
        <Heading
          title={services.title}
          description={services.description}
          tag={services.tag}
          toCenter
        />
      </div>
    </motion.section>
  );
};

export default ServicesGrid;
