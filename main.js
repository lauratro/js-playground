var myName = "Laura";
console.log(myName);
var age = 34;
console.log(age);
var juliaAge = 32;
var ageDiff = age - juliaAge;
console.log(ageDiff);
if (age > 21) {
  console.log("You are older than 21");
} else {
  console.log("You are not older than 21");
}
if (age > juliaAge) {
  console.log("You are older than Julia");
} else if (age < juliaAge) {
  console.log("You are younger than Julia");
} else {
  console.log("You have the same age as Julia");
}
// Array exercises
var classCab = [
  "Laura",
  "Moe",
  "Natalia",
  "Chigar",
  "Denis",
  "Oded",
  "Michelle",
  "Ottavia",
  "Lucas",
];
console.log(classCab);
var classCabSort = classCab.sort();
console.log(classCabSort);
console.log(classCabSort[0]);
console.log(classCabSort[classCabSort.length - 1]);
for (let i = 0; i < classCabSort.length; i++) {
  console.log(classCabSort[i]);
}
