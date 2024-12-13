"use client";

import type { Component } from "@only-win/types/ui";
import LobbyView from "./_views/lobby.view";
import PlayingView from "./_views/playing.view";
import { useGameContext } from "@/lib/context/use-game";
import { Loader } from "./_views/_components/loader";


const GamePage: Component = () => {
	const { id, round, phase } = useGameContext();

	if (id.length === 0) return <Loader />;

	if (phase == "waiting") return <LobbyView />
	if (phase == "playing") return <PlayingView />

	return (
		<p>
			Round {round} is in an unknown phase {phase}
		</p>
	);
}

export default GamePage;