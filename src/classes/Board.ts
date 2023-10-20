import { FixedArray } from "src/types/helpers";

export class Board {
  outerLayerArr: FixedArray<number, 24>;
  secondLayerArr: FixedArray<number, 24>;
  thirdLayerArr: FixedArray<number, 24>;
  innerLayerArr: FixedArray<number, 24>;

  constructor(
    outerLayerArr: FixedArray<number, 24>,
    secondLayerArr: FixedArray<number, 24>,
    thirdLayerArr: FixedArray<number, 24>,
    innerLayerArr: FixedArray<number, 24>
  ) {
    this.outerLayerArr = outerLayerArr;
    this.secondLayerArr = secondLayerArr;
    this.thirdLayerArr = thirdLayerArr;
    this.innerLayerArr = innerLayerArr;
  }
}
