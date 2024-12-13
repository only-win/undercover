import type { Component } from "@only-win/types/ui";
import type { Socket } from "socket.io-client";
import type { PropsWithChildren } from "react";
import type { GameContextProps, GameState } from "./game.type";
import type { Player, ReconnectPlayerResponse } from "@only-win/types/game";
import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@only-win/db/supabase";

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider: Component<PropsWithChildren> = ({ children }) => {
  const { gameId } = useParams<{ gameId: string }>();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [game, setGame] = useState<GameState>({
    id: "",
    players: [],
    self: null,
    round: 0
  });
  const router = useRouter();

  useEffect(() => {
    const connection = io("http://localhost:3001");
    setSocket(connection);

    const playerId = localStorage.getItem("playerId");
    connection.emit("reconnect-player", { playerId, gameCode: gameId }, (response: ReconnectPlayerResponse) => {
      setGame((prev) => ({ ...prev, ...response }));
      localStorage.setItem("playerId", response.self.id);
    });

    const subscription = supabase
      .channel(gameId)
      .on("postgres_changes", {
        schema: "public",
        event: "*",
        table: "Player"
      }, ({ eventType, new: newPlayer, old: oldPlayer }) => {
        if (eventType === "INSERT") {
          setGame((prev) => ({ ...prev, players: [...prev.players, newPlayer as Player] }));
        }

        if (eventType === "DELETE") {
          setGame((prev) => ({ ...prev, players: prev.players.filter((player) => player.id !== oldPlayer.id) }));
        }

        if (eventType === "UPDATE") {
          setGame((prev) => ({
            ...prev,
            players: prev.players.map((p) => p.id === newPlayer.id ? newPlayer as Player : p)
          }));
        }
      })
      .subscribe();

    return () => {
      connection.disconnect();
      subscription.unsubscribe();
    }
  }, []);

  const create = (): boolean => {
    if (!socket) return false;

    socket.emit("create-game", {}, ({ game }: any) => {
      setGame((prev) => ({ ...prev, id: game.id }));
      localStorage.setItem("playerId", game.host.id);
      router.push(`/game/${game.code}`);
    });

    return true;
  }

  return (
    <GameContext.Provider value={{
      id: game.id,
      create,
      phase: "waiting",
      round: 0,
      players: game.players,
      self: game.self
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