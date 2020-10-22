import { Game } from "../entities";

export function emitPointsCount(io: any, pointsCount: any, game: Game) {
  io.in(game.roomNumber).emit("pointsCount", pointsCount);
}
