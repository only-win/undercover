import fastify from "fastify";
import { Server } from "socket.io";
import { createServer } from "http";
import { load } from "./manager/event.manager";

const app = fastify();
const httpServer = createServer(app.server);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  path: "/socket.io",
});

io.on("connection", (socket) => load(io, socket));

httpServer.listen({ port: 3001 }, () => console.log("Server is running on port 3001"));