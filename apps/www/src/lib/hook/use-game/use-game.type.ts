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

	gameInfo: {
		globalWord: string;
		uncoverWord: string;
	};

	gameConfig: {
		votingTime: number;
		writingTime: number;

		players: Record<string, {
			name: string;
			role: "civil" | "undercover" | "mr-white";
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