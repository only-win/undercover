"use client";

import type { Component } from "@only-win/types/ui";
import { useGame } from "@/lib/hook/use-game";
import { useParams } from "next/navigation";
import LobbyVue from "./_vues/lobby.vue";
import PlayingVue from "./_vues/playing.vue";

const GamePage: Component = () => {
	const { gameId } = useParams<{ gameId: string }>();
	const { round, phase } = useGame(gameId);

	if (phase == "waiting") return <LobbyVue />
	if (phase == "playing") return <PlayingVue />

	return (
		<p>
			Round {round} is in an unknown phase {phase}
		</p>
	);
}

export default GamePage;