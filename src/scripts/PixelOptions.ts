import { IPixelOptions } from "../type";
export class PixelOptions {
  static getDefaults(): IPixelOptions {
    return {
      color: "red",
      onColor: "red",
      offColor: "black",
      bgColor: "black",
    };
  }
}
