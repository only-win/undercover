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

const LobbyView = () => {
  const { players, self } = useGameContext();
  const [name, setName] = useState("");

  useEffect(() => {
    setName(self?.name ?? "");
  }, [self?.name]);

  return (
    <div className="max-w-7xl flex items-center flex-col justify-center mx-auto space-y-10 mt-16">
      <h1 className="font-bold text-5xl">Waiting for players</h1>

      <div className="flex gap-4 w-full h-[40rem]">
        <Chat self={self} />
        <div className="p-4 border rounded-md flex-1">
          <div className="border-b flex items-center gap-4 pb-2">
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
            <Image src={profilePicture(name)} width={64} height={64} alt="avatar" />
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LobbyView;