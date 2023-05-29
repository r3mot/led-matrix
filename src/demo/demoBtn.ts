import { Matrix } from "../scripts";

let on = false;
let scroll = false;

export function demoButtonToggle(
  matrix: Matrix,
  b: HTMLButtonElement,
  b2: HTMLButtonElement
): void {
  b.addEventListener("click", () => {
    matrix.toggle();
    on = !on;
  });

  b2.addEventListener("click", () => {
    matrix.toggleAnimation();
    scroll = !scroll;
    scroll ? (b2.innerHTML = "STOP SCROLL") : (b2.innerHTML = "START SCROLL");
  });
}
