import type { GameStatus } from "@prisma/client";
import type { Player } from "."

export type ReconnectPlayerResponse = {
  gameId: string;
  self: Player;
  players: Player[];
  status: GameStatus,
  round: number;
  hostId: string;
  error?: string;
}