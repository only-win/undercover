"use client";

import { Card, CardHeader } from "@/lib/component/ui/card";
import { generateName } from "just-random-names";
import { Chat } from "./_components/chat";
import { Input } from "@/lib/component/ui/input";
import { useEffect, useState } from "react";
import { profilePicture } from "@/lib/utils/profile";
import { RefreshCcw } from "lucide-react";
import { useGameContext } from "@/lib/context/use-game";
import Image from "next/image";
import { Button } from "@/lib/component/ui/button";
import { PlayerCard } from "./_components/player-card";

const LobbyView = () => {
  const { players, self, code, hostId } = useGameContext();
  const [name, setName] = useState("");

  useEffect(() => {
    setName(self?.name ?? "");
  }, [self?.name]);

  return (
    <div className="max-w-7xl flex items-center flex-col justify-center mx-auto space-y-10 mt-16">
      <h1 className="font-bold text-5xl">Waiting for players</h1>

      <div className="flex gap-4 w-full h-[40rem]">
        <Chat self={self} code={code} />
        <div className="p-4 border rounded-md flex-1">
          <div className="border-b flex items-center gap-4 pb-4">
            <div className="relative flex-1">
              <Input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-0 bg-[#1F1E1F] text-[#E0E0E0] p-2"
              />

              <RefreshCcw
                className="absolute top-1/2 right-2 text-[#E0E0E0] cursor-pointer -translate-y-1/2"
                size={20}
                onClick={() => setName(generateName([], 2))}
              />
            </div>
            <Image src={profilePicture(name)} width={64} height={64} alt="avatar" className="size-10" />
          </div>

          <div className="mt-4">
            <div className="grid grid-cols-3 gap-4">
              {players.map((player) => (
                // <Card key={player.id} className="flex items-center gap-4 p-4">
                //   <Image src={profilePicture(player.name)} width={32} height={32} alt="avatar" />
                //   <CardHeader>{player.name}</CardHeader>
                // </Card>
                <PlayerCard playerName={player.name} text={"Maison"} self_hasVoted={false} self_needWord={true} isTurn self_isTurnPassed />
              ))}
            </div>

            <div className="text-center mt-10">
              {players.length < 4 ? (
                <p className="italic text-white/70">{4 - players.length} missing players to start the game</p>
              ) : (
                <>
                  {hostId === self?.id && (
                    <Button>Start game</Button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LobbyView;