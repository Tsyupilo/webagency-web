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

const AVATARS = [
  {
    src: "https://pbs.twimg.com/profile_images/1909615404789506048/MTqvRsjo_400x400.jpg",
    fallback: "SK",
    tooltip: "Skyleen",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
    fallback: "CN",
    tooltip: "Shadcn",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg",
    fallback: "AW",
    tooltip: "Adam Wathan",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1783856060249595904/8TfcCN0r_400x400.jpg",
    fallback: "GR",
    tooltip: "Guillermo Rauch",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1534700564810018816/anAuSfkp_400x400.jpg",
    fallback: "JH",
    tooltip: "Jhey",
  },
];

export const AvatarGroupDemo = () => {
  return (
    <AvatarGroup className="h-12 -space-x-3">
      {AVATARS.map((avatar, index) => (
        <Avatar key={index} className="border-3 size-12 border-background">
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
        <DialogHeader>
          <DialogTitle>Create Your Event</DialogTitle>
          <DialogDescription>
            Fill out the form below to create and customize your upcoming event
          </DialogDescription>
        </DialogHeader>
        <ContactsForm />
      </DialogContent>
    </Dialog>
  );
}
