export class PlayerArrow {
  playerId: number;
  arrowIndex: number; //relative to the board
  activeMatrix: number[][]; //the matrix that the arrow is currently on where the cards will be reffered to

  constructor(playerId: number, arrowIndex: number) {
    this.playerId = playerId;
    this.arrowIndex = arrowIndex;
    this.activeMatrix = [];
  }

  setMatrix(matrix: number[][]) {
    this.activeMatrix = matrix;
  }

  moveArrow(newIndex: number) {
    this.arrowIndex = newIndex;
  }
}
