import { Game } from "../entities";

export function emitEndGame(io: any, game: Game, playerNumber: number) {
  io.in(game.roomNumber).emit("endGame", game.playersArray[playerNumber].id);
}
