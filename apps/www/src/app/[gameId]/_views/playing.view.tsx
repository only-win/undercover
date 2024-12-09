"use client";

import { Card, CardHeader } from "@/lib/component/ui/card";
import { Chat } from "./_components/chat";
import { profilePicture, rolePicture } from "@/lib/utils/profile";
import { useParams } from "next/navigation";
import { useGame } from "@/lib/hook/use-game";
import Image from "next/image";

const players = ["Giselle", "Liam", "Ella", "Player4"];

const PlayingVue = () => {
	const { gameId } = useParams<{ gameId: string }>();
  const { gameInfo } = useGame(gameId);

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-3">
      <div className="flex flex-row p-4 gap-2 h-[calc(100vh-10rem)] w-[calc(100vw-10rem)]">
        <Chat />
        
        <div className="flex flex-col gap-2 w-8/12">
          <Card>
            <CardHeader className="bg-[#141314] flex flex-row justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-left text-sm font-normal text-[#E0E0E0]">Votre mot est:</p>
                <div className="bg-[#1f1e1f] text-lg text-[#E0E0E0] p-2">
                  {gameInfo.globalWord}
                </div>
              </div>

              <div className="bg-[#1f1e1f]">
                <Image src={rolePicture("civil")} width={64} height={64} alt="avatar" />
              </div>
            </CardHeader>
          </Card>

          <Card className="h-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
              {players.map((player, index) => (
                <div className="flex flex-col bg-[#0A090A] items-center" key={index}>
                  <Image src={profilePicture(player)} width={96} height={96} alt="avatar" className="p-2" />
                  <p className="text-center text-xs text-white/90 mb-1.5">{player}</p>
                </div>
              ))}

              {players.length < 4 && (
                <div className="flex flex-col bg-[#0a090a60] items-center justify-center">
                  <p className="text-center text-xs text-white/90 mb-1.5">
                    Waiting for {4 - players.length} players
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PlayingVue;