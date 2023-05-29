import { IPixelOptions } from "../../type";
export class PixelOptions {
  static getDefaults(): IPixelOptions {
    return {
      color: "black",
      onColor: "red",
      offColor: "transparent",
      bgColor: "transparent",
    };
  }
}
