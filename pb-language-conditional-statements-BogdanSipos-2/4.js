const isMilkAvailable = true;
const isBreadAvailable = true;
const isAppleAvailable = false;

if (isBreadAvailable) {
  console.log("Eat a sandwich");
} else if (isMilkAvailable) {
  console.log("Some milk with cereals will be okay");
} else if (isAppleAvailable) {
  console.log("Okay, I guess I'll just eat an apple");
} else {
  console.log("I'll have breakfast outside!");
}
