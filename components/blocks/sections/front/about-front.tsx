"use client";

import ThemeButton from "@/components/theme/ui/theme-button";
import { CardStack } from "@/components/ui/card-stack";
import CircularText from "@/components/ui/circular-text";
import GradientText from "@/components/ui/gradient-text";
import { AnimateIcon } from "@/components/ui/icons/icon";
import { Lightbulb } from "@/components/ui/icons/lightbulb-icon";
import Iridescence from "@/components/ui/iridescence";
import { siteConfig } from "@/configs/site.config";
import { cn } from "@/lib/utils";
import { motion, Transition, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const blockVariants: Variants = {
  hidden: {
    y: 10,
    opacity: 0,
    filter: "blur(4px)",
    scale: 0.98,
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    rotate: 0,
  },
};

const transition: Transition = {
  duration: 0.5,
  ease: "easeInOut",
};

export interface AboutFrontProps {
  description: string;
  cards: {
    description: string;
    name: string;
    category: string;
    service: string;
    link: string;
  }[];
  mascot_1: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  mascot_2: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
}

const BLOCK_CONTENT = {
  read_more: {
    en: " OUR ARTICLES * OUR ARTICLES *",
    ru: " ЧИТАТЬ СТАТЬИ * ЧИТАТЬ СТАТЬИ *",
  },
  theme_button: {
    en: "Read more",
    ru: "Читать подробнее",
  },
  title: {
    en: "About Agency",
    ru: "Об Агентстве",
  },
};

const AboutFront = ({ fields }: { fields: AboutFrontProps }) => {
  if (!fields) return null;
  console.log(fields);
  return (
    <motion.section
      variants={blockVariants}
      initial="hidden"
      whileInView={"visible"}
      transition={transition}
      className="relative"
    >
      <div className="container mx-auto">
        <div className="flex justify-center gap-2">
          <AboutFrontBox cards={fields.cards} />
          <AboutFrontTitle />
          {fields.description && (
            <AboutFrontContent
              description={fields.description}
              images={[fields.mascot_1, fields.mascot_2]}
            />
          )}
        </div>
      </div>
    </motion.section>
  );
};

const AboutFrontContent = ({
  description,
  images,
}: {
  description: string;
  images: { url: string; width: number; height: number; alt: string }[];
}) => {
  return (
    <div className="relative flex flex-grow basis-auto flex-col gap-6">
      <div className="flex flex-col gap-6 rounded-3xl border border-white/20 bg-card-dark px-8 py-10 text-base font-semibold leading-relaxed text-accent-foreground">
        <div
          className="flex flex-col gap-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Link href="/about">
          <ThemeButton divChild variant="outline" sizes="sm">
            {BLOCK_CONTENT.theme_button[siteConfig.site_lang]}
          </ThemeButton>
        </Link>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-end -space-x-16">
        <Image
          src={images[0].url}
          alt={images[0].alt}
          width={images[0].width}
          height={images[0].height}
          className="h-fit w-[15rem] object-contain"
        />
        <Image
          src={images[1].url}
          alt={images[1].alt}
          width={images[1].width}
          height={images[1].height}
          className="h-fit w-[12rem] object-contain"
        />
      </div>
    </div>
  );
};

const AboutFrontTitle = () => {
  return (
    <div className="flex h-auto w-24 flex-col gap-6 rounded-lg px-4 py-8">
      <GradientText
        colors={["#B9FBC0", "#B892ED", "#B9FBC0", "#B892ED", "#B9FBC0"]}
        animationSpeed={10}
        showBorder={false}
        className="inline-flex h-full w-full origin-center -rotate-90 items-center justify-center overflow-visible whitespace-nowrap uppercase backdrop-blur-none"
      >
        <h2
          className={cn(
            "font-heading text-[4.2rem] uppercase tracking-wider",
            "",
          )}
        >
          {BLOCK_CONTENT.title[siteConfig.site_lang]}
        </h2>
      </GradientText>
    </div>
  );
};

const AboutFrontBox = ({ cards }: { cards: AboutFrontProps["cards"] }) => {
  const min = -20;
  const max = 20;
  return (
    <div className="relative w-fit">
      <div className="absolute -right-1 -top-6 z-10 flex scale-75 items-center justify-center transition-all duration-300 hover:scale-[70%]">
        <AnimateIcon animateOnHover>
          <Link
            target="_blank"
            href="/blog"
            className="hover:drop-shadow-secondary-xl group transition-all duration-300"
          >
            <CircularText
              text={BLOCK_CONTENT.read_more[siteConfig.site_lang]}
              onHover="speedUp"
              spinDuration={20}
              className="text-1xl rounded-full outline-[2rem] outline-secondary/20"
            />
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary p-4 transition-all duration-300 group-hover:scale-125">
              <Lightbulb className="size-10 text-accent-foreground" />
            </div>
          </Link>
        </AnimateIcon>
      </div>
      <div
        className={cn(
          "relative",
          "h-[42.8rem] w-[39.9rem]",
          "mask-image-about-front-box overflow-hidden rounded-2xl border border-white/20",
        )}
      >
        <div className="absolute inset-0 z-0">
          <Iridescence
            color={[0.4, 0.5, 0.7]}
            mouseReact={false}
            amplitude={3}
            speed={0.3}
          />
        </div>
        {/* <div className="absolute inset-0 z-10 flex items-center justify-center">
          <SiriOrb
            size={"128px"}
            animationDuration={20}
            colors={{
              bg: "var(--color-primary)",
            }}
            className="rounded-full border-8 border-white/30 drop-shadow-2xl backdrop-blur-lg"
          />
        </div> */}
        <div className="absolute left-1/2 top-1/2 z-10 mt-8 -translate-x-1/2 -translate-y-1/2">
          <CardStack items={cards} offset={10} scaleFactor={0.06} />
        </div>
      </div>
    </div>
  );
};

export default AboutFront;
