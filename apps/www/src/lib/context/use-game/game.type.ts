import type { Player } from "@only-win/types/game";

export type GameContextProps = GameState & {
  create: () => boolean;
  phase: string;
}

export type GameState = {
  id: string;
  code: string;
  players: Player[];
  self: Player | null;
  round: number;
}