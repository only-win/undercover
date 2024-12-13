import type { Server, Socket } from "socket.io";
import type { EventExecute } from "../manager/event.manager";
import { prisma } from "@only-win/db/prisma";
import { generateName } from "just-random-names";

export const name = "reconnect-player";

export type ReconnectPlayerProps = {
  gameCode: string;
  playerId: string | null;
}

export const execute: EventExecute<ReconnectPlayerProps> = async (io: Server, socket: Socket, { gameCode, playerId }, callback) => {
  if (!gameCode) return callback({ error: "Game code is required" });
  
  const game = await prisma.game.findUnique({
    where: { code: gameCode },
    include: { players: true }
  });

  if (!game) {
    return callback({ error: "Game not found" });
  }

  if (typeof playerId === "string" && playerId.length > 0) {
    const player = await prisma.player.findUnique({
      where: { id: playerId },
    });

    if (player) {
      return callback({
        gameId: game.id,
        self: player,
        players: game.players,
        status: game.status,
        round: game.currentRound,
        hostId: game.hostId
      });
    }
  }

  if (game.status !== "WAITING") {
    return callback({ error: "Game already started" });
  }

  const newPlayer = await prisma.player.create({
    data: {
      game: {
        connect: { id: game.id }
      },
      name: generateName([], 2)
    }
  });

  return callback({
    gameId: game.id,
    code: game.code,
    self: newPlayer,
    players: [...game.players, newPlayer],
    status: game.status,
    round: game.currentRound,
    hostId: game.hostId
  });
}