import { Card, CardContent, CardHeader } from "@/lib/component/ui/card";
import { Input } from "@/lib/component/ui/input";
import { ScrollArea } from "@/lib/component/ui/scroll-area";
import { cn } from "@/lib/utils";
import { profilePicture } from "@/lib/utils/profile";
import type { Component } from "@only-win/types/ui";
import Image from "next/image";
import { TimerCard } from "./timer-card";

type Message = {
  name: string;
  message: string;
  type: "player" | "system";
};

const messages: Message[] = [
  { name: "Player4", message: "has joined the game", type: "system" },
  { name: "Player1", message: "Hello", type: "player" },
  { name: "Player2", message: "Hi", type: "player" },
  { name: "Player3", message: "Hey", type: "player" },
];

export const Chat: Component = () => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="bg-[#1f1e1f] p-2">
        <p className="text-sm text-[#E0E0E0]">Chat tab</p>
      </CardHeader>

      <CardContent className="p-0 flex flex-col h-full">
        <ScrollArea className="flex-1">
          <div className="flex flex-col">
            {messages.map((message, index) => (
              <div key={index} className={cn(
                "flex flex-row items-center gap-2 p-2", {
                  "bg-[#0F0E0F]": message.type === "system",
                }
              )}>
                <Image src={profilePicture(message.name)} width={25} height={25} alt="avatar" />

                <div className="flex flex-row gap-2">
                  {message.type === "system" && <strong>{message.name}</strong>}
                  <div>{message.message}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <TimerCard type="voting" />

        <div className="flex flex-row gap-2 p-2 bg-[#0A090A]">
          <Input placeholder="Message" className="border-0 bg-transparent" />
        </div>
      </CardContent>
    </Card>
  );
}