export type GamePhase = "waiting" | "playing" | "gameover";
export type RoundPhase = "writing" | "voting";

export type RoundState = {
	phase: RoundPhase;
	activePlayer: string;

	players: Record<string, {
		word: string;
		vote: string | null;
	}>;
}

export type GameState = {
	round: number;
	phase: GamePhase;

	gameConfig: {
		votingTime: number;
		writingTime: number;

		players: Record<string, {
			name: string;
			role: "civilian" | "uncover" | "mrWhite";
		}>;

		roles: {
			civilian: number;
			uncover: number;
			mrWhite: number;
			total: number;
		}
	};

	timer: number;
	rounds: RoundState[];
}