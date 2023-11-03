import { FixedArray } from "src/types/helpers";

export type layers = "outer" | "second" | "third" | "inner";

export type BoardLayer = FixedArray<number, 24>;

export const circleArr: FixedArray<number, 24> = [
  4, 1, 2, 2, 3, 5, 1, 1, 4, 2, 3, 5, 5, 1, 2, 4, 3, 3, 2, 5, 4, 4, 1, 3,
];

export class BoardClass {
  outerLayerArr: BoardLayer;
  secondLayerArr: BoardLayer;
  thirdLayerArr: BoardLayer;
  innerLayerArr: BoardLayer;
  rotateDirection: "clockwise" | "counterclockwise" = "clockwise";

  constructor(
    outerLayerArr: BoardLayer,
    secondLayerArr: BoardLayer,
    thirdLayerArr: BoardLayer,
    innerLayerArr: BoardLayer
  ) {
    this.outerLayerArr = outerLayerArr;
    this.secondLayerArr = secondLayerArr;
    this.thirdLayerArr = thirdLayerArr;
    this.innerLayerArr = innerLayerArr;
  }

  rotateLayer(layer: layers) {
    switch (layer) {
      case "outer":
        this.rotateOuterLayer();
        break;
      case "second":
        this.rotateSecondLayer();
        break;
      case "third":
        this.rotateThirdLayer();
        break;
      case "inner":
        this.rotateInnerLayer();
        break;
      default:
        break;
    }
  }

  rotateOuterLayer() {
    this.rotateDirection === "clockwise"
      ? this.outerLayerArr.unshift(this.outerLayerArr.pop()!)
      : this.outerLayerArr.push(this.outerLayerArr.shift()!);
  }

  rotateSecondLayer() {
    this.rotateDirection === "clockwise"
      ? this.secondLayerArr.unshift(this.secondLayerArr.pop()!)
      : this.secondLayerArr.push(this.secondLayerArr.shift()!);
  }

  rotateThirdLayer() {
    this.rotateDirection === "clockwise"
      ? this.thirdLayerArr.unshift(this.thirdLayerArr.pop()!)
      : this.thirdLayerArr.push(this.thirdLayerArr.shift()!);
  }

  rotateInnerLayer() {
    console.log("this.innerLayerArr", this.innerLayerArr);
    this.rotateDirection === "clockwise"
      ? this.innerLayerArr.unshift(this.innerLayerArr.pop()!)
      : this.innerLayerArr.push(this.innerLayerArr.shift()!);

    console.log("this.innerLayerArr", this.innerLayerArr);
  }
}
