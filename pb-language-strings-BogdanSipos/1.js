const sentence = "It was a dark and stormy night";
const words = sentence.split(" ");
const initials = words.map(word => word[0]);
const output = initials.join(" ");
console.log(output);