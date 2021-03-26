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
