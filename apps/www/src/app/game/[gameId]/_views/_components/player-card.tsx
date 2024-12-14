"use client";

import { Card } from "@/lib/component/ui/card";
import { cn } from "@/lib/utils";
import { profilePicture } from "@/lib/utils/profile";
import type { Component } from "@only-win/types/ui";
import Image from "next/image";

type PlayerCardProps = {
  playerName: string;
  text?: string;

  self: {
    hasVoted: boolean;
    needWord: boolean;
  }

  self_hasVoted: boolean;
  self_needWord: boolean;

  isTurn: boolean;
  self_isTurnPassed: boolean;
};

export const PlayerCard: Component<PlayerCardProps> = ({ playerName, text, self_hasVoted, self_needWord, isTurn, self_isTurnPassed }) => {
  return (
    <div className={cn(
      "flex flex-col items-center w-full", {
      }
    )}>
      <div className={cn(
        "flex flex-col bg-[#0A090A] items-center w-full", {
          "border-2 border-[#F3F9A5]": isTurn,
          "border-2 border-[#F67B65]": self_isTurnPassed
        }
      )}>
        <Image src={profilePicture(playerName)} width={96} height={96} alt="avatar" className="p-2" />
        {/* <p className="text-center text-xs text-white/90 mb-1.5">{name}</p> */}
      </div>

      {self_needWord && (
        <div className={cn(
          "bg-[#0A090A] p-1 text-sm w-[70%] text-center", {
            "text-[#F3F9A5]": isTurn,
            "border-l-2 border-r-2 border-b-2 border-[#F3F9A5]": isTurn,
            "text-[#F67B65]": self_isTurnPassed,
            "border-l-2 border-r-2 border-b-2 border-[#F67B65]": self_isTurnPassed
          }
        )}>
          En attente
        </div>
      )}
    </div>
  );
};