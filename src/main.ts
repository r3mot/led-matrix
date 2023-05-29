import "./style.css";
import { Matrix } from "./scripts";
import { demoButtonToggle } from "./demo/demoBtn";

const options = {
  width: 100,
  height: 100,
  class: "led-matrix",
  onColor: "red",
  offColor: "black",
  bgColor: "black",
};
const displayMessage = "hello, world!";

const matrix = new Matrix(options);
matrix.setText(displayMessage);

// TODO: integrate toggle features into Matrix class
const b = document.getElementById("toggle") as HTMLButtonElement;
const b2 = document.getElementById("matrix-animate") as HTMLButtonElement;
demoButtonToggle(matrix, b, b2);
