import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactsForm from "../forms/contacts-form";

interface ContactsDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  currentState: "open" | "closed";
  setCurrentState: (state: "open" | "closed") => void;
  setDrawerState?: (state: "open" | "closed") => void;
  overlayTransparent?: boolean;
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarGroup, AvatarGroupTooltip } from "@/components/ui/avatar-group";
import { AnimateIcon } from "@/components/ui/icons/icon";
import { MessageCircleHeart } from "@/components/ui/icons/message-circle-heart-icon";
import { motion } from "motion/react";

const AVATARS = [
  {
    src: "/images/avatar-web.jpg",
    fallback: "SK",
    tooltip: "Помогу с разработкой сайта",
  },
  {
    src: "/images/avatar-seo.jpg",
    fallback: "CN",
    tooltip: "Помогу с продвижением и SEO",
  },
  {
    src: "/images/avatar-ad.jpg",
    fallback: "GR",
    tooltip: "Помогу настроить рекламу",
  },
  {
    src: "/images/avatar-content.jpg",
    fallback: "AW",
    tooltip: "Помогу сделать хороший контент",
  },
];

export const AvatarGroupDemo = () => {
  return (
    <AvatarGroup side="bottom" className="h-12 -space-x-3">
      {AVATARS.map((avatar, index) => (
        <Avatar
          key={index}
          className="size-12 rounded-full border-2 border-input shadow-xl shadow-primary/15 transition duration-300 hover:shadow-2xl hover:shadow-primary/50"
        >
          <AvatarImage src={avatar.src} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
          <AvatarGroupTooltip>
            <p>{avatar.tooltip}</p>
          </AvatarGroupTooltip>
        </Avatar>
      ))}
    </AvatarGroup>
  );
};

const dialogVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
    rotateX: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    y: -24,
    filter: "blur(4px)",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    y: 0,
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
  },
};

export default function ContactsDialog({
  currentState,
  setCurrentState,
  setDrawerState,
  overlayTransparent = false,
}: ContactsDialogProps) {
  return (
    <Dialog
      onOpenChange={(open) => setCurrentState(open ? "open" : "closed")}
      open={currentState === "open"}
    >
      <DialogContent overlayTransparent={overlayTransparent}>
        <motion.div
          variants={dialogVariants as any}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center gap-4"
        >
          <motion.div variants={itemVariants as any}>
            <DialogHeader className="flex select-none flex-col items-center justify-center">
              <AnimateIcon animateOnHover={true} animateOnTap={true}>
                <div className="flex items-center gap-3 text-2xl font-semibold tracking-tighter text-primary">
                  <motion.button
                    variants={itemVariants as any}
                    transition={{ delay: 0.3 }}
                    type="button"
                  >
                    <MessageCircleHeart className="size-8" />
                  </motion.button>
                  <motion.div
                    variants={itemVariants as any}
                    transition={{ delay: 0.5 }}
                    className="text-4xl font-bold"
                  >
                    <DialogTitle className="text-4xl font-bold tracking-tighter">
                      Оставить заявку
                    </DialogTitle>
                  </motion.div>
                </div>
              </AnimateIcon>

              <div className="flex flex-col items-center gap-4">
                <motion.div variants={itemVariants as any}>
                  <DialogDescription className="text-basetext-accent-foreground text-center">
                    Наша команада поможет ответить на все ваши вопросы
                  </DialogDescription>
                </motion.div>
                <motion.div
                  variants={itemVariants as any}
                  transition={{ delay: 0.7 }}
                >
                  <AvatarGroupDemo />
                </motion.div>
              </div>
            </DialogHeader>
          </motion.div>

          <motion.div variants={itemVariants as any} transition={{ delay: 1 }}>
            <ContactsForm />
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
