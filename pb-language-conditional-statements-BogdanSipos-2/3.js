const mode = "dark";
let backgroundColor;
let textColor;

if (mode === "dark") {
  backgroundColor = "black";
  textColor = "white";
} else if (mode === "light") {
  backgroundColor = "white";
  textColor = "black";
} else {
  console.log("Invalid mode");
}

console.log(`Current mode: ${mode}`);
console.log(`Background color: ${backgroundColor}`);
console.log(`Text color: ${textColor}`);
