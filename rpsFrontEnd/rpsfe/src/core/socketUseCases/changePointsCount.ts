import { Socket } from "../SocketClient/socket";

export const changePointsCount: (setPointsCount: any) => void = (
  setPointsCount
) => {
  let socket = Socket.socket;
  if (socket) {
    socket.on("pointsCount", (scoreCount: any) => {
      setPointsCount(scoreCount);
    });
  }
};
