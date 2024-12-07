export type GamePhase = "waiting" | "playing" | "voting" | "gameover";

export type GameState = {
	round: number;
	phase: GamePhase;
}