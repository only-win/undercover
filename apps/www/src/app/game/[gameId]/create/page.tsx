"use client";

import { useGameContext } from "@/lib/context/use-game";
import type { Component } from "@only-win/types/ui";

const CreateGamePage: Component = () => {
  const { create } = useGameContext();

  return (
    <div className="max-w-3xl flex items-center flex-col justify-center mx-auto space-y-10 mt-24">
      <h1 className="font-bold text-5xl">Créer une partie</h1>

      <div className="border rounded-md p-4">
      
      </div>
    </div>
  );
}

export default CreateGamePage;