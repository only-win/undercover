"use client";

import { useGame } from "@/lib/hook/use-game";
import { Component } from "@only-win/types/ui";
import { useParams } from "next/navigation";

const GamePage: Component = () => {
	const { gameId } = useParams<{ gameId: string }>();
	const { round } = useGame(gameId);

	return (
		<div></div>
	);
}

export default GamePage;