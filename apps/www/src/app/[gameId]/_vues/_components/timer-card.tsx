"use client";

import { useGame } from "@/lib/hook/use-game";
import type { Component } from "@only-win/types/ui";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type TimerCardProps = {
  type: "voting" | "writing";
}

export const TimerCard: Component<TimerCardProps> = ({ type }) => {
	const { gameId } = useParams<{ gameId: string }>();
  const { phase, rounds, round, timer } = useGame(gameId);

  if (phase !== "playing") return <></>;
  if (rounds[round] && rounds[round].phase !== "voting") return <></>;

  return (
    <div className="p-3.5 flex flex-row justify-between gap-2 bg-[#F3F9A5] text-[#000]">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold">{type === "voting" ? "It's time to vote!" : "It's your turn!"}</h1>
        <p className="text-xs font-normal">
          {type === "voting"
            ? "Vote for the person you think is undercover by clicking on their name"
            : "Write a word in the field that corresponds to the one you were given"
          }
        </p>
      </div>

      <div className="bg-[#000000] text-[#fff] p-2 rounded-full">
        <p className="text-xl font-bold">{timer}</p>
      </div>
    </div>
 );
}