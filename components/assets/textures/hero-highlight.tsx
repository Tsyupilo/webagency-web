import { motion } from "motion/react";

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

export const HeroHighlight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "calc(100% + 1rem)",
        height: "calc(100% + 1rem)",
      }}
    >
      <motion.path
        initial={{ opacity: 1, pathLength: 1, filter: "blur(0px)" }}
        animate={{
          opacity: [1, 0, 1],
          pathLength: [1, 0, 1],
          filter: ["blur(0px)", "blur(4px)", "blur(0px)"],
        }}
        transition={{
          duration: 2,
          repeatDelay: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        fill="none"
        d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
        style={{
          stroke: "hsla(var(--primary) / 1)",
          strokeWidth: 3,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      />
    </svg>
  );
};
