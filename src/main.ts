import "./style.css";
import { Matrix } from "./scripts/Matrix";

const matrix = new Matrix({
  width: 100,
  height: 100,
  class: "led-matrix",
  onColor: "red",
  offColor: "black",
  bgColor: "black",
});

const grid = document.getElementById("grid");

const str = "abcdefg";

for (let i = 0; i < str.length; i++) {
  const el = matrix.render(str[i]);

  grid!.appendChild(el);
}
