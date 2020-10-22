import { Game } from "../entities";

export function emitStartGame(game: Game, io: any) {
  io.in(game.roomNumber).emit("startGame", true);
}
