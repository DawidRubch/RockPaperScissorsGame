
import { checkGame, setChoice, setGameType } from "../adapters";
import { Game, Player } from "../entities";
import { disconnected } from "./disconnected";

export function game(
  io: any,
  socket: any,
  newPlayer: Player,
  Bo3: Game,
  Bo1: Game
) {
  let maxScore: number = 0;
  socket.on("gameType", function (gameType: number) {
    maxScore = gameType;
    if (gameType === 3) {
      setGameType(io, newPlayer, Bo3, socket);
    } else if (gameType === 1) {
      setGameType(io, newPlayer, Bo1, socket);
    }
  });
  socket.on("choice", function (choice: string) {
    newPlayer.choice = choice;
    if (maxScore === 3) {
      setChoice(Bo3, io);
      checkGame(Bo3, maxScore, io);
      disconnected(Bo3.roomNumber, io, socket);
    } else if (maxScore === 1) {
      setChoice(Bo1, io);
      checkGame(Bo1, maxScore, io);
      disconnected(Bo1.roomNumber, io, socket);
    }
  });
}
