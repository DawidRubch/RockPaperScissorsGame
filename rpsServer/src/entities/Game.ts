export class Game {
  bestOf: number;
  connections: number;
  roomNumber: number;
  playersArray: any[];
  constructor(bestOf: number) {
    this.bestOf = bestOf;
    this.connections = 0;
    this.roomNumber = 0;
    this.playersArray = [];
  }
}
