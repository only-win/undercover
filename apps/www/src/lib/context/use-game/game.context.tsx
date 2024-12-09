import type { Component } from "@only-win/types/ui";
import type { Socket } from "socket.io-client";
import type { PropsWithChildren } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const GameContext = createContext(undefined);

export const GameProvider: Component<PropsWithChildren> = ({ children }) => {
  // TODO: Implement game management
  const [socket, setSocket] = useState<Socket | null>(null);
  const [game, setGame] = useState({});

  useEffect(() => {
    const connection = io("http://localhost:3001");
    setSocket(connection);

    // Handle events

    return () => {
      connection.disconnect();
    }
  }, []);

  return (
    <GameContext.Provider value={undefined}>
      {children}
    </GameContext.Provider>
  );
}

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }

  return context;
}