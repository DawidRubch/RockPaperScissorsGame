export  class Player {
    id: any;
    choice: string;
    points: number;
    constructor(id: any) {
      this.id = id;
      this.choice = "";
      this.points = 0;
    }
  }