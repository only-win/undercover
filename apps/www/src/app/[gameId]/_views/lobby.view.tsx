"use client";

import { Card, CardHeader } from "@/lib/component/ui/card";
import { generateName } from "just-random-names";
import { Chat } from "./_components/chat";
import { Input } from "@/lib/component/ui/input";
import { useEffect, useState } from "react";
import { profilePicture } from "@/lib/utils/profile";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";

const players = ["Giselle", "Liam", "Ella"];

const LobbyView = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(generateName("en", 2));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-3">
      <h1 className="text-4xl font-bold text-[#BFD6DC]">
        Waiting for players
      </h1>

      <div className="flex flex-row p-4 gap-2 h-[calc(100vh-10rem)] w-[calc(100vw-10rem)]">
        <Chat />
        
        <div className="flex flex-col gap-2 w-8/12">
          <Card>
            <CardHeader className="bg-[#141314] flex flex-row justify-between">
              <div className="flex flex-col gap-2 w-3/6">
                <p className="text-left font-normal text-[#E0E0E0]">Choisissez un nom d'utilisateur pendant le jeu</p>
                <div className="relative">
                  <Input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-0 bg-[#1F1E1F] text-[#E0E0E0] p-2"
                  />

                  <RefreshCcw
                    className="absolute right-2 top-2 text-[#E0E0E0] cursor-pointer"
                    size={20}
                    onClick={() => setName(generateName([], 2))}
                  />
                </div>
              </div>

              <><Image src={profilePicture(name)} width={64} height={64} alt="avatar" /></>
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

export default LobbyView;