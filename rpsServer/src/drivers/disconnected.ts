import { emitEnemyLeft } from "../useCases";

export function disconnected(roomNumber: number, io: any, socket: any) {
  socket.on("disconnect", () => {
    emitEnemyLeft(roomNumber, io, socket);
  });
}
