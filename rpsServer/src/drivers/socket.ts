import { connection } from ".";
import { Game } from "../entities";

module.exports = function socketHandler(io: any) {
  let Bo1: Game = new Game(1);
  let Bo3: Game = new Game(3);
 
  connection(io, Bo1, Bo3);
};
