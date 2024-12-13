"use client";

import type { Component } from "@only-win/types/ui";
import { profilePicture } from "@/lib/utils/profile";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@only-win/db/supabase";
import Image from "next/image";
import { Input } from "@/lib/component/ui/input";
import { Button } from "@/lib/component/ui/button";
import { Send } from "lucide-react";
import type { Player } from "@only-win/types/game";
import type { RealtimeChannel } from "@supabase/supabase-js";
import { useGameContext, type Message } from "@/lib/context/use-game";


export const Chat: Component<{ self: Player | null, code: string }> = ({ self, code }) => {
  const [message, setMessage] = useState("");
  const { messages } = useGameContext();
  const channel = useRef<RealtimeChannel | null>(null);

  useEffect(() => {
    if (!channel.current) {
      const client = supabase;

      channel.current = client.channel(code, {
        config: {
          broadcast: { self: true },
        }
      });
    }

    return () => {
      channel.current?.unsubscribe();
      channel.current = null;
    }
  }, []);

  const handleSendMessage = () => {
    if (!message.trim() || !channel.current) return;
    const payload: Message = {
      type: "player",
      name: self?.name ?? "Unknown",
      message
    }

    channel.current.send({ type: "broadcast", event: "message", payload: payload });

    setMessage("");
  }

  return (
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
  );
}