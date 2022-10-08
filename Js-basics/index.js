let name = "moni";
let age = 30;
let currency = 10.25;
let isApproved = true;
let sample = undefined;
let sample1 = null;
console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of currency:", typeof currency);
console.log("Type of isApproved:", typeof isApproved);
console.log("Type of sample:", typeof sample);
console.log("Type of sample1:", typeof sample1);

//Objects
let person = {
  name: "monisha",
  age: 25,
};
console.log("Type of person:", typeof person);
console.log("person:", person);
//Dot Notation
console.log("person name using Dot Notation: ", person.name);
console.log("person age using Dot Notation: ", person.age);
//Bracket Notation
console.log("person name using Bracket Notation: ", person["name"]);
console.log("person age using Bracket Notation: ", person["age"]);

//Arrays
//empty Declaration
let numbers = [];
console.log("Type of numbers: ", typeof numbers);
// with values
let cart = ["pencil", "pen", "sketch", "pencil"];
console.log("Type of cart: ", typeof cart);
console.log("values on cart: ", cart);
//To Access elements inside cart using Index
console.log("1st Element of Cart using Bracket Notation: ", cart[0]);
//To Access First Index of elements using Elements
console.log(
  "To Access First Index of elements using Elements: ",
  cart.indexOf("pencil")
);
//To Access Last Index of elements using Elements
console.log(
  "To Access Last Index of elements using Elements: ",
  cart.lastIndexOf("pencil")
);
//length
console.log("Total Items in Cart: ", cart.length);

//Functions
function printWelcome(name) {
  console.log("Hello ", name);
}

printWelcome("monisha");

//Square of a number
function square(number) {
  return number * number;
}

let result = square(5);
console.log("square of number 5 is : ", result);
