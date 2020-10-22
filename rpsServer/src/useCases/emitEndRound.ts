export function endRound(io: any, roomNumber: any) {
  io.in(roomNumber).emit("endRound", "endRound");
}
