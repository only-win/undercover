import type { Component } from "@only-win/types/ui";
import type { Socket } from "socket.io-client";
import type { PropsWithChildren } from "react";
import type { GameContextProps } from "./game.type";
import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useRouter } from "next/navigation";

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider: Component<PropsWithChildren> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [game, setGame] = useState({});
  const router = useRouter();

  useEffect(() => {
    const connection = io("http://localhost:3001");
    setSocket(connection);

    return () => {
      connection.disconnect();
    }
  }, []);

  const create = (): boolean => {
    if (!socket) return false;

    socket.emit("create-game", {}, ({ game }: any) => {
      localStorage.setItem("playerId", game.host.id);
      router.push(`/game/${game.code}`);
    });

    return true;
  }

  return (
    <GameContext.Provider value={{
      create
    }}>
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