import { IMaxtrixOptions } from "../type";
import { MatrixOptions } from "./MatrixOptions";
import { Pixel } from "./Pixel";
import { Char } from "../char";

export class Matrix {
  private width: number;
  private height: number;
  private class: string;
  private onColor: string;
  private offColor: string;
  private bgColor: string;
  private char: Char;
  private charMap: Map<string, number[]>;
  private charLength: number;
  private pixels: Pixel[] = [];

  constructor(options?: IMaxtrixOptions) {
    const defaults = MatrixOptions.getDefaults();
    this.width = options?.width || defaults.width;
    this.height = options?.height || defaults.height;
    this.class = options?.class || defaults.class;
    this.onColor = options?.onColor || defaults.onColor;
    this.offColor = options?.offColor || defaults.offColor;
    this.bgColor = options?.bgColor || defaults.bgColor;
    this.char = new Char();
    this.charMap = this.char.getMap();
    this.charLength = this.char.getCharWidth();
    this.pixels = [];
  }

  private getMatrix(): HTMLElement {
    const matrix = document.createElement("div");
    matrix.style.width = `${this.width}px`;
    matrix.style.height = `${this.height}px`;
    matrix.style.backgroundColor = this.bgColor;
    matrix.classList.add(this.class);
    return matrix;
  }

  private createChar(char: string): HTMLElement {
    const charDiv = document.createElement("div");
    charDiv.classList.add("char");
    const charData = this.charMap.get(char);
    if (charData) {
      for (let i = 0; i < charData.length; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < this.charLength; j++) {
          const pixel = new Pixel();
          pixel.setOffColor(this.offColor);
          pixel.setOnColor(this.onColor);
          this.pixels.push(pixel);
          if ((charData[i] >> (7 - j)) & 1) {
            pixel.turnOn();
          }

          row.appendChild(pixel.render());
        }
        charDiv.appendChild(row);
      }
    }
    return charDiv;
  }

  private createText(text: string): HTMLElement {
    const textDiv = document.createElement("div");
    textDiv.classList.add("text");
    for (let i = 0; i < text.length; i++) {
      textDiv.appendChild(this.createChar(text[i]));
    }
    return textDiv;
  }

  private createGrid(text: string): HTMLElement {
    const textDiv = this.createText(text);
    return textDiv;
  }

  render(text: string): HTMLElement {
    if (!this.sanitizeInput(text)) {
      throw new Error("Invalid input");
    }
    const matrix = this.getMatrix();
    const grid = this.createGrid(text);
    matrix.appendChild(grid);
    return matrix;
  }

  private sanitizeInput = (input: string): boolean => {
    // only a - g
    return /^[a-g]*$/.test(input);
  };
}
