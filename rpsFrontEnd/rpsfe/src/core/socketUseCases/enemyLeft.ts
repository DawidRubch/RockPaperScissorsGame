import { Socket } from "../SocketClient/socket";

export const enemyLeft: (
  history: any,
  won: boolean | undefined
) => void = (history, won) => {
  let socket = Socket.socket;
  if (socket) {
    socket.on("EnemyLeft", () => {
      if (won === undefined) {
        history.push("/play-type");
        history.goBack();
      }
    });
  }
};
