import type { GameState } from "./use-game.type"
import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";
import { useEffect, useState } from "react"

let socket: Socket | null = null;

export const useGame = (gameId: string) => {
	const [state, setState] = useState<GameState>({
		round: 0,
		phase: "playing",

		gameInfo: {
			globalWord: "Brosse à dent",
			uncoverWord: "Dentifrice",
		},

		gameConfig: {
			votingTime: 0,
			writingTime: 0,

			players: {
				TestingPlayer: {
					name: "TestingPlayer",
					role: "civil"
				}
			},

			roles: {
				civilian: 0,
				uncover: 0,
				mrWhite: 0,
				total: 0
			}
		},

		rounds: [
			{
				phase: "voting",
				activePlayer: "TestingPlayer",
				players: {
					TestingPlayer: { word: "Maison", vote: null }
				}
			}
		],
		timer: 0
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
		phase: state.phase,

		gameInfo: state.gameInfo,
		gameConfig: state.gameConfig,

		rounds: state.rounds,
		timer: state.timer
	}
}