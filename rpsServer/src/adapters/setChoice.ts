import { Game, Player } from "../entities";
import { endRound } from "../useCases";


export function setChoice(game: Game, io: any): any {
  if (Object.keys(game.playersArray).length === 2) {
    let player1: Player = game.playersArray[0];
    let player2: Player = game.playersArray[1];

    if (player1.choice !== "" && player2.choice !== "") {
      endRound(io, game.roomNumber);
      if (player1.choice === player2.choice) return;
      if (player1.choice === "scissors") {
        if (player2.choice === "paper") {
          player1.points++;
        } else {
          player2.points++;
        }
      } else if (player1.choice === "paper") {
        if (player2.choice === "scissors") {
          player2.points++;
        } else {
          player1.points++;
        }
      } else {
        if (player2.choice === "scissors") {
          player1.points++;
        } else {
          player2.points++;
        }
      }
    }
  }
}
