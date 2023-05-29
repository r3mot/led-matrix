let on = false;

export function toggleScrollAnimation() {
  on = !on;
  on ? turnOn() : turnOff();
}

function turnOn() {
  const grid = document.getElementById("grid") as HTMLDivElement;
  grid.style.transform = "tranlateX(300%)";
  grid.style.animation = "scroll 15s linear infinite";
}

function turnOff() {
  const grid = document.getElementById("grid") as HTMLDivElement;
  grid.style.transform = "tranlateX(0%)";
  grid.style.animation = "none";
}
