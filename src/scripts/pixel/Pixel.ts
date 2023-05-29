import { IPixelOptions } from "../../type";
import { PixelOptions } from "./PixelOptions";

export class Pixel {
  private onColor: string;
  private offColor: string;
  private pixel: HTMLElement;
  private isOn: boolean;
  private canToggle: boolean;

  constructor(options?: IPixelOptions) {
    const defaults = PixelOptions.getDefaults();
    this.onColor = options?.onColor || defaults.onColor;
    this.offColor = options?.offColor || defaults.offColor;
    this.pixel = document.createElement("div");
    this.pixel.classList.add("pixel");
    this.pixel.style.backgroundColor = this.offColor;
    this.isOn = false;
    this.canToggle = false;
  }

  public setCanToggle(can: boolean): void {
    this.canToggle = can;
  }

  public setOnColor(color: string): void {
    this.onColor = color;
  }

  public setOffColor(color: string): void {
    this.offColor = color;
  }

  public render(): HTMLElement {
    return this.pixel;
  }

  public turnOn(): void {
    this.pixel.style.backgroundColor = this.onColor;
    this.isOn = true;
  }

  public turnOff(): void {
    this.pixel.style.backgroundColor = this.offColor;
    this.isOn = false;
  }

  public toggle(): void {
    if (this.canToggle) {
      if (this.isOn) {
        this.turnOff();
      } else {
        this.turnOn();
        this.pixel.classList.add("on");
      }
    }
  }

  public blink(times: number, interval: number): void {
    let i = 0;
    const blinkInterval = setInterval(() => {
      if (i < times) {
        this.toggle();
        i++;
      } else {
        clearInterval(blinkInterval);
      }
    }, interval);
  }
}
