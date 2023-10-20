export class PlayerArrow {
  playerId: number;
  arrowIndex: number; //relative to the board

  constructor(playerId: number, arrowIndex: number) {
    this.playerId = playerId;
    this.arrowIndex = arrowIndex;
  }
}
