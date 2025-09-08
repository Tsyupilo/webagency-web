"use client";

import DarkVeil from "@/components/ui/dark-veil";
import { motion, Transition, Variants } from "motion/react";

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

const ServicesTextureFront = () => {
  return (
    <>
      <motion.div
        variants={blockVariants}
        initial="hidden"
        whileInView="visible"
        transition={transition}
        className="pt-front"
      >
        <div className="h-128 absolute w-full overflow-hidden rounded-t-[8rem] shadow-[0_-2rem_2rem_0_hsla(var(--primary-darker)/0.125)]">
          <div className="absolute -left-4 -top-4 -z-10 h-[calc(100%+4rem)] w-[calc(100%+4rem)] rounded-[inherit] bg-background gradient-mask-b-60">
            <div className="-mt-16 h-full w-full">
              <DarkVeil
                hueShift={97}
                warpAmount={1.3}
                speed={0.5}
                resolutionScale={1}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ServicesTextureFront;
