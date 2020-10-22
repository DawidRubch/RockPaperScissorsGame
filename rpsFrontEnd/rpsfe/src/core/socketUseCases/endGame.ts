import { Socket } from "../SocketClient/socket";

export const endGame: (socketId: any, setWon: any) => void = (
  socketId,
  setWon
) => {
  let socket = Socket.socket;
  if (socket) {
    socket.on("endGame", (id: any) => {
      if (socketId === id) {
        setWon(true);
      } else {
        setWon(false);
      }
    });
  }
};
