"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

let interval: any;

type Card = {
  name: string;
  category: string;
  description: string;
  link: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  console.log(cards);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="md:w-100 relative h-32 w-60">
      {cards.map((card, index) => {
        return (
          <motion.a
            href={card.link}
            target="_blank"
            key={card.link}
            className="absolute flex h-32 w-full flex-col justify-between gap-4 rounded-3xl border border-white/20 bg-card-light/25 p-4 shadow-xl shadow-black/[0.1] backdrop-blur-2xl"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div
              className="line-clamp-2 text-sm font-normal italic text-accent-foreground"
              dangerouslySetInnerHTML={{ __html: card.description }}
            ></div>
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium text-accent-foreground">
                {card.name}
              </p>
              <p className="text-xs font-normal text-muted-foreground">
                {card.category}
              </p>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
};
