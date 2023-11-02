import { FixedArray } from "src/types/helpers";

export type layers = "outer" | "second" | "third" | "inner";
export class BoardClass {
  outerLayerArr: FixedArray<number, 24>;
  secondLayerArr: FixedArray<number, 24>;
  thirdLayerArr: FixedArray<number, 24>;
  innerLayerArr: FixedArray<number, 24>;
  rotateDirection: "clockwise" | "counterclockwise" = "clockwise";

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
