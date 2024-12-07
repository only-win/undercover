"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/lib/component/ui/card";
import { Input } from "@/lib/component/ui/input";
import Image from "next/image";
import { useState } from "react";

export const ChooseName = () => {
  const [name, setName] = useState("");

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <div>
            <CardTitle className="text-md font-semibold">Choose your name</CardTitle>
            <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <Image
            src={"https://api.dicebear.com/9.x/fun-emoji/png?seed=" + name}
            alt="Choose your name"
            width={200}
            height={200}
          />
        </CardHeader>
      </Card>
    </>
  );
}