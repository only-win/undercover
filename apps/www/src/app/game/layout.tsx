"use client";

import { GameProvider } from "@/lib/context/use-game";
import type { Component } from "@only-win/types/ui";
import type { PropsWithChildren } from "react";

const GameLayout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <GameProvider>
      {children}
    </GameProvider>
  );
}

export default GameLayout;