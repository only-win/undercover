import type { Server, Socket } from "socket.io";
import type { EventExecute } from "../manager/event.manager";
import { prisma } from "@only-win/db/prisma";
import { generateCode } from "../utils/random";

export const name = "create-game";

export const execute: EventExecute = async (io: Server, socket: Socket, _, callback) => {
  const player = await prisma.player.create({
    data: {}
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

  callback({ game });
}