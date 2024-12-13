"use client";

import type { Component } from "@only-win/types/ui";
import { profilePicture } from "@/lib/utils/profile";
import { useEffect, useState } from "react";
import { supabase } from "@only-win/db/supabase";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Input } from "@/lib/component/ui/input";
import { Button } from "@/lib/component/ui/button";
import { Send } from "lucide-react";
import type { Player } from "@only-win/types/game";

type Message = {
  name: string;
  message: string;
  type: "player" | "system";
};

export const Chat: Component<{ self: Player | null }> = ({ self }) => {
  const { gameId } = useParams<{ gameId: string }>();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const channel = supabase
      .channel(gameId, {
        config: {
          broadcast: { self: true }
        }
      })
      .on<Message>("broadcast", { event: "message" }, ({ payload }) => {
        const { name, message, type } = payload;
        setMessages((prev) => [...prev, { name, message, type }]);
      })
      .on("postgres_changes", {
        event: "*",
        schema: "public",
        table: "Player"
      }, (payload) => {
        console.log(payload);
      })
      .subscribe();

    return () => {
      channel.unsubscribe();
    }
  }, []);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    const payload: Message = {
      type: "player",
      name: self?.name ?? "Unknown",
      message
    }

    supabase
      .channel(gameId)
      .send({ type: "broadcast", event: "message", payload });

    setMessage("");
  }

  return (
    <>
      <div className="border p-4 rounded-md w-96 h-full flex flex-col">
        {/* En-tête */}
        <div className="border-b pb-2">
          <p>Discussion</p>
        </div>

        {/* Messages */}
        <div className="overflow-y-scroll h-full mt-4 flex-1">
          {messages.map(({ type, name, message }, index) => (
            <div key={index} className="text-sm py-2">
              <div>
                {type === "system" ? (
                  <p><span className="font-bold">{name}</span> {message}</p>
                ) : (
                  <div>
                    <div className="flex items-center gap-2">
                      <Image src={profilePicture(name)} width={32} height={32} alt="avatar" className="size-6" />
                      <p className="font-bold">{name}</p>
                    </div>
                    <p>{message}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input et bouton d'envoi */}
        <div className="flex items-center border-t mt-2 pt-2 gap-2">
          <Input
            type="text"
            className="flex-1 p-2 border rounded-md outline-none"
            placeholder="Écrivez un message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button size="icon">
            <Send />
          </Button>
        </div>
      </div>
      {/*<Card className="flex flex-col h-full flex-1">
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


        <div className="flex flex-row gap-2 p-2 bg-[#0A090A]">
          <Input placeholder="Message" className="border-0 bg-transparent" />
        </div>
      </CardContent>
    </Card> */}
    </>
  );
}