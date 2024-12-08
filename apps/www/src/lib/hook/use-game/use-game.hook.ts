import type { GameState } from "./use-game.type"
import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";
import { useEffect, useState } from "react"

let socket: Socket | null = null;

export const useGame = (gameId: string) => {
	const [state, setState] = useState<GameState>({
		round: 0,
		phase: "playing"
	});

	useEffect(() => {
		if (!socket) socket = io("http://localhost:3001");

		return () => {
			socket?.disconnect();
			socket = null;
		}
	}, [gameId]);


	return {
		round: state.round,
		phase: state.phase
	}
}