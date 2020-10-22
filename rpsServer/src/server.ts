const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const socketHandler = require("../src/drivers/socket");

const PORT = 5000;

const app = express();
const httpserver = http.Server(app);
const io = socketio(httpserver);

socketHandler(io);

httpserver.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});

export {};
