import { Socket } from "../SocketClient/socket";

export const startGame: (setRedirect: any) => void = (setRedirect) => {
  Socket.socket.on("startGame", () => {
    setRedirect(true);
  });
};
