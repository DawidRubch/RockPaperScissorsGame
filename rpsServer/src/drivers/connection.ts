import { Game, Player } from "../entities";
import { game } from "./game";

export function connection(io: any, Bo1: Game, Bo3: Game) {
  io.on("connection", (socket: any) => {
    console.log("UserConnected");
    if (Bo1.connections === 2) {
      resetRooms(Bo1);
    } else if (Bo3.connections === 2) {
      resetRooms(Bo3);
    }

    let newPlayer: Player = new Player(socket.id);
    game(io, socket, newPlayer, Bo3, Bo1);
  });
}

function resetRooms(game: Game) {
  game.playersArray = [];
  game.connections = 0;
  game.roomNumber++;
}
