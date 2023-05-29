import { IMaxtrixOptions } from "../../type";
export class MatrixOptions {
  static getDefaults(): IMaxtrixOptions {
    return {
      width: 200,
      height: 200,
      class: "led-matrix",
      onColor: "red",
      offColor: "blue",
      bgColor: "orange",
    };
  }
}
