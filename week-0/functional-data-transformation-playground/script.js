// String Transformations
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

function wordCount(str) {
  return str.split(" ").length;
}

// Array Transformations
function double(arr) {
  return arr.map((num) => num * 2);
}

function filterEven(arr) {
  return arr.filter((num) => num % 2 === 0);
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function average(arr) {
  return sum(arr) / arr.length;
}

// Object Transformations
function fullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

function isAdult(person) {
  return person.age >= 18;
}

function filterByAge(people, minAge) {
  return people.filter(
    (person) => typeof person.age === "number" && person.age >= minAge
  );
}

// Function Composition
function compose(...fns) {
  return function (result) {
    return fns.reduceRight((acc, fn) => fn(acc), result);
  };
}

// Examples of function compositions
const reverseAndCapitalize = compose(capitalize, reverse);
const doubleEvenNumbers = compose(double, filterEven);

console.log(capitalize("hello"));
console.log(reverse("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));
console.log(wordCount("Hello world, this is a test.")); 

console.log(double([1, 2, 3, 4]));
console.log(filterEven([1, 2, 3, 4])); 
console.log(sum([1, 2, 3, 4]));
console.log(average([1, 2, 3, 4])); 

const person = { firstName: "John", lastName: "Doe", age: 20 };
console.log(fullName(person));
console.log(isAdult(person)); 

const people = [
  { firstName: "John", lastName: "Doe", age: 20 },
  { firstName: "Jane", lastName: "Doe", age: 17 },
];
console.log(filterByAge(people, 18));

console.log(reverseAndCapitalize("hello")); 
console.log(doubleEvenNumbers([1, 2, 3, 4]));
