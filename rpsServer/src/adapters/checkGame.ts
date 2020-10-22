import { emitPointsCount, emitEndGame } from "../useCases"
import { Game, Player } from "../entities";

export function checkGame(game: Game, maxScore: number, io: any) {
  if (Object.keys(game.playersArray).length === 2) {
    if (game.playersArray[0].points === maxScore) {
      emitEndGame(io, game, 0);
    }
    if (game.playersArray[1].points === maxScore) {
      emitEndGame(io, game, 1);
    }

    let player1: Player = game.playersArray[0];
    let player2: Player = game.playersArray[1];

    let pointsCount = {
      player1,
      player2,
    };

    emitPointsCount(io, pointsCount, game);
  }
}
