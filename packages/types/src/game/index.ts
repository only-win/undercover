export type Player = {
    id: string;
    name: string;
}

export enum StartGameResponse {
    Success = "success",
    NotEnoughPlayers = "not-enough-players",
    GameAlreadyStarted = "game-already-started",
    NotHost = "not-host",
    UnexpectedError = "unexpected-error"
}

export * from "./event";