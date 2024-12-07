import type { Server, Socket } from "socket.io";
import { readdirSync } from "fs";
import { join } from "path";

export type EventExecute<P = unknown> = (io: Server, socket: Socket, props: P) => void;

export const load = (io: Server, socket: Socket) => {
  const events = readdirSync(join(__dirname, "..", "event"));
  for (const event of events) {
    const dynamicImport = require(join(__dirname, "..", "event", event));

    const name: string = dynamicImport.name;
    if (!name) {
      throw new Error(`Event ${event} does not have a name`);
    }

    const execute: EventExecute = dynamicImport.execute;
    if (!execute) {
      throw new Error(`Event ${event} does not have an execute function`);
    }

    socket.on(name, (props: unknown) => execute(io, socket, props))
  }
}