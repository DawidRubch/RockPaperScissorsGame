import { Socket } from "../SocketClient/socket";

export const emitGameType: (gameType: number) => void = (gameType) => {
  let socket = Socket.socket
  socket.emit("gameType", gameType);
};
