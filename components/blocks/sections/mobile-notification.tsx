"use client";

import { useIsMobile } from "@/hooks/use-mobile";

export function MobileNotification() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="fixed left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center bg-background font-heading text-2xl font-bold text-foreground text-primary">
        <div className="flex flex-col text-center">
          Пока что нужен экран побольше...
          <small className="font-sans text-sm font-semibold">
            Размер окна должен быть {">="}1450px
          </small>
        </div>
      </div>
    );
  }
}
