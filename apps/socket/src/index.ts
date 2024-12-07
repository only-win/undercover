import fastify from "fastify";
import { Server } from "socket.io";
import { createServer } from "http";

const app = fastify();
const httpServer = createServer(app.server);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  path: "/socket.io",
});

// TODO: Handle events and add logic here
// io.on("connection", (socket) => ...)

httpServer.listen({ port: 3001 }, () => console.log("Server is running on port 3001"));