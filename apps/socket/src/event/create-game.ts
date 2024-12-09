import type { Server, Socket } from "socket.io";
import type { EventExecute } from "../manager/event.manager";

export const name = "create-game";

export const execute: EventExecute = (io: Server, socket: Socket, _, callback) => {
  console.log("create-game");
  callback({ gameId: "coucou" });
}