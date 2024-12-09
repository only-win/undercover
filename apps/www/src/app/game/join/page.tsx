"use client";

import type { Component } from "@only-win/types/ui";
import { Button } from "@/lib/component/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/lib/component/ui/table";
import { useGameContext } from "@/lib/context/use-game";

const JoinPage: Component = () => {
  const { create } = useGameContext();
  return (
    <div className="max-w-3xl flex items-center flex-col justify-center mx-auto space-y-10 mt-24">
      <h1 className="font-bold text-5xl">Rejoindre une partie</h1>

      <div className="border rounded-md p-4">
        <Table className="w-[65rem] mb-10">
          <TableHeader>
            <TableRow>
              <TableHead />
              <TableHead className="text-center">Joueurs</TableHead>
              <TableHead className="text-center">Citoyens</TableHead>
              <TableHead className="text-center">Undercovers</TableHead>
              <TableHead className="text-center">Mrs White</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>RomainSav</TableCell>
              <TableCell className="text-center">8/10</TableCell>
              <TableCell className="text-center">6</TableCell>
              <TableCell className="text-center">2</TableCell>
              <TableCell className="text-center">0</TableCell>
              <TableCell className="text-right">
                <Button size="sm">Rejoindre</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="border p-4 flex flex-col items-center gap-6 rounded-md">
          <div className="text-center">
            <h2 className="font-semibold text-2xl">Votre partie, vos règles</h2>
            <p className="text-white/70">Créer votre propre partie et invités vos amis !</p>
          </div>
          <Button onClick={() => create()}>Créer une partie</Button>
        </div>
      </div>
    </div>
  );
}

export default JoinPage;