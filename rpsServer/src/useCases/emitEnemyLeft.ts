export function emitEnemyLeft(roomNumber: number, io: any, socket: any): void {
  io.in(roomNumber).emit("EnemyLeft", "Enemy just left");
}
