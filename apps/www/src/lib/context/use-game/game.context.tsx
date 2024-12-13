import type { Component } from "@only-win/types/ui";
import type { Socket } from "socket.io-client";
import type { PropsWithChildren } from "react";
import type { GameContextProps, GameState, Message } from "./game.type";
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
    code: gameId,
    players: [],
    self: null,
    round: 0,
    messages: []
  });
  const router = useRouter();

  useEffect(() => {
    const connection = io("http://localhost:3001");
    setSocket(connection);

    if (gameId) {
      const playerId = localStorage.getItem("playerId");
      connection.emit("reconnect-player", { playerId, gameCode: gameId }, (response: ReconnectPlayerResponse) => {
        const { gameId, ...game } = response;
        console.log(response);
        if (response.error) return;

        setGame((prev) => ({
          ...prev,
          ...game,
          id: gameId
        }));
        localStorage.setItem("playerId", response.self.id);
      });
    }

    const subscription = supabase
      .channel(gameId)
      .on<Message>("broadcast", { event: "message" }, ({ payload }) => {
        const { name, message, type } = payload;
        setGame((prev) => ({ ...prev, messages: [...prev.messages, { name, message, type }] }));
      })
      .on("postgres_changes", {
        schema: "public",
        event: "*",
        table: "Player"
      }, ({ eventType, new: newPlayer, old: oldPlayer }) => {
        if (eventType === "INSERT") {
          if (newPlayer.id !== game.id) return;
          setGame((prev) => ({
            ...prev,
            players: [...prev.players, newPlayer as Player].filter((player, index, self) =>
              index === self.findIndex((p) => p.id === player.id)
            )
          }));
        }

        if (eventType === "DELETE") {
          if (oldPlayer.id !== game.id) return;
          setGame((prev) => ({ ...prev, players: prev.players.filter((player) => player.id !== oldPlayer.id) }));
        }

        if (eventType === "UPDATE") {
          if (newPlayer.id !== game.id) return;
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

    socket.emit("create-game", {}, (response: any) => {
      setGame((prev) => ({ ...prev, ...response, id: response.gameId, code: response.gameCode }));
      localStorage.setItem("playerId", response.hostId);
      router.push(`/game/${response.code}`);
    });

    return true;
  }

  return (
    <GameContext.Provider value={{
      id: game.id,
      create,
      phase: "waiting",
      round: 0,
      code: game.code,
      players: game.players,
      self: game.self,
      messages: game.messages
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