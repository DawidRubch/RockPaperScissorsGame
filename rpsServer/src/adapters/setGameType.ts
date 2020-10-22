import { Game, Player } from "../entities";
import { emitEnemyLeft, emitStartGame } from "../useCases";

export function setGameType(io: any, player: Player, game: Game, socket: any) {
  socket.join(game.roomNumber);
  game.playersArray.push(player);
  if (Object.keys(game.playersArray).length === 2) {
    emitStartGame(game, io);
    socket.on("disconnect", () => {
      emitEnemyLeft(game.roomNumber, io, socket);
    });
  }
  game.connections++;
}
