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
// Looping over an Array
var classAges = [30, 22, 15, 34, 27, 28, 33];

var j = 0;

while (j < classAges.length) {
  console.log(classAges[j]);
  j++;
}

while (j < classAges.length) {
  if (classAges[j] % 2 == 0) {
    console.log(classAges[j]);
  }

  j++;
}
var even = [];
for (var j = 0; j < classAges.length; j++) {
  if (classAges[j] % 2 == 0) {
    console.log(classAges[j]);
  }
}
//Functions
//Sort the array
function arraySort(array) {
  var sortArray = array.sort();
  console.log("Sorted Array: " + sortArray);
}
arraySort(classAges);

//Lowest value in an array

function lowestValueInArray(array) {
  var lowestValue = array.sort();
  console.log("the lowest value is " + lowestValue[0]);
}
lowestValueInArray(classAges);

//Biggest value in an array

function biggestValueInArray(array) {
  var biggestArray = array.sort();
  console.log("The biggest value is " + biggestArray[biggestArray.length - 1]);
}
biggestValueInArray(classAges);

// Function with two parameters

var arrayExercise = [
  3,
  6,
  67,
  6,
  23,
  11,
  100,
  8,
  93,
  0,
  17,
  24,
  7,
  1,
  33,
  45,
  28,
  33,
  23,
  12,
  99,
  100,
];
function arrayIndex(array, index) {
  console.log(array[index]);
}

//arrayIndex(arrayExercise, 1);

// value is repeted in the array
function duplicateValueCheck(array) {
  var sortedArray = array.sort();
  for (var i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      console.log(sortedArray[i]);
    }
  }
}
duplicateValueCheck(arrayExercise);

//Ex. 7 To join in a string
var output;
function joinArrayToString(array) {
  console.log(array.join(" "));
}
joinArrayToString(classCab);

//Javascript string
// ex.1 Reverse a number
function reverseNumber(num) {
  var string = num.toString();
  console.log(string);
  var numToArray = string.split("").reverse();

  var joined = numToArray.join("");

  console.log(joined);
}

reverseNumber(25789);

//ex. 2 Alphabetical order
function alphabeticalOrder(string) {
  var alpha = string.toLowerCase().split("").sort().join("");

  console.log(alpha);
}
alphabeticalOrder("Laura");
//ex 3. To Capitalize a string
let sentence;
function capitalizer(string) {
  const words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    sentence = words.join(" ");
    console.log(sentence);
  }
}

capitalizer("prince of persia");

//Longest word
var mySentence = "Web Development Tutorial";

function findLongestWord(str) {
  var longestWord = str.split(" ").sort(function (a, b) {
    return b.length - a.length;
  });
  console.log(longestWord[0]);
}
findLongestWord(mySentence);
