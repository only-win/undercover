import type { Server, Socket } from "socket.io";
import type { EventExecute } from "../manager/event.manager";
import { prisma } from "@only-win/db/prisma";
import { generateCode } from "../utils/random";
import { generateName } from "just-random-names";

export const name = "create-game";

export const execute: EventExecute = async (io: Server, socket: Socket, _, callback) => {
  const player = await prisma.player.create({
    data: {
      name: generateName([], 2)
    }
  });

  const game = await prisma.game.create({
    data: {
      code: generateCode(),
      host: {
        connect: { id: player.id }
      },
      players: {
        connect: { id: player.id }
      }
    },
    include: {
      host: true
    }
  });

  return callback({
    code: game.code,
    gameId: game.id,
    self: player,
    players: [player],
    status: game.status,
    round: game.currentRound,
    hostId: player.id
  });
}