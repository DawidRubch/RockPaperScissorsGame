import { Socket } from "../SocketClient/socket";
export const makeRoundEnd: (setChoice: any, setTime: any) => void = (
  setChoice,
  setTime
) => {
  let socket = Socket.socket;
  if (socket) {
    socket.on("endRound", () => {
      setChoice("");
      setTime(10);
    });
  }
};
