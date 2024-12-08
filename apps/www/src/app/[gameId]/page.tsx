"use client";

import type { Component } from "@only-win/types/ui";
import { useGame } from "@/lib/hook/use-game";
import { useParams } from "next/navigation";
import LobbyVue from "./_vues/lobby.vue";

const GamePage: Component = () => {
	const { gameId } = useParams<{ gameId: string }>();
	const { round, phase } = useGame(gameId);

	if (phase == "waiting") return (
		<LobbyVue />
	);

	return (
		<p>
			Game {gameId} is in round {round} and phase {phase}
		</p>
	);
}

export default GamePage;