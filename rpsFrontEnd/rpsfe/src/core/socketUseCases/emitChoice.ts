import { Socket } from "../SocketClient/socket";
export const emitChoice: (choice: string) => void = (choice) => {
  let socket = Socket.socket;
  if (socket) socket.emit("choice", choice);
};
