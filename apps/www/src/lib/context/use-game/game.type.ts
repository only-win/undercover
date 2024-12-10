export type GameContextProps = {
  create: () => boolean;
}

export type GameState = {
  id: string;
  players: Player[];
}

export type Player = {}