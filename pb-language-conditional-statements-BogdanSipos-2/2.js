const person1Name = "Jane";
const person1Age = 18;
const person2Name = "Doe";
const person2Age = 21;

if (person1Age < person2Age) {
  console.log(`${person1Name} is the youngest person`);
} else if (person2Age < person1Age) {
  console.log(`${person2Name} is the youngest person`);
} else {
  console.log("Both persons are the same age");
}
