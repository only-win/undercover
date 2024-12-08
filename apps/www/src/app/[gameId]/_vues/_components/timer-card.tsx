"use client";

import { useGame } from "@/lib/hook/use-game";
import type { Component } from "@only-win/types/ui";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const TimerCard: Component = () => {
	const { gameId } = useParams<{ gameId: string }>();
  const { phase, rounds, round, timer } = useGame(gameId);

  if (phase !== "playing") return <></>;
  if (rounds[round] && rounds[round].phase !== "voting") return <></>;

  return (
    <div className="p-3.5 gap-2 bg-[#F3F9A5] text-[#000]">
      <div className="flex flex-col gap-1">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-xl font-bold">{rounds[round]?.phase === "voting" ? "It's time to vote!" : "It's your turn!"}</h1>
          <span className="bg-black h-5 w-5 p-3 rounded-full text-white flex justify-center items-center">{timer}</span>
        </div>
        <p className="text-xs font-normal">
          {rounds[round]?.phase === "voting"
            ? "Vote for the person you think is undercover by clicking on their name"
            : "Write a word in the field that corresponds to the one you were given"
          }
        </p>
      </div>
    </div>
 );
}