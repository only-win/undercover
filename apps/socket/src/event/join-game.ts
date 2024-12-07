import type { Server, Socket } from "socket.io";
import type { EventExecute } from "../manager/event.manager";

export const name = "join-game";

export type JoinGameProps = {
  gameId: string;
  username: string;
}

export const execute: EventExecute<JoinGameProps> = (io: Server, socket: Socket, { gameId, username }) => {
  console.log({ gameId, username });
}