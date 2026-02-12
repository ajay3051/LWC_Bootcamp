console.log("LWC bootcamp day-2");

let myName;
console.log(typeof myName);

if (myName) {
  console.log("Print my name: " + myName);
} else {
  console.log("Name is not defined correctly!");
}

let mySalary = 0;
console.log("Salary: " + mySalary);
console.log(typeof mySalary);

if (mySalary) {
  console.log("You can buy a drink!");
} else {
  console.log("Your bank balance is zero!");
}

console.log("Logical operators");

const num1 = 20;
const num2 = 30;
console.log("Total: ", num1 + num2);
console.log(typeof num1, typeof num2);

const num3 = 10;
const num4 = "20";
console.log(num3 + num4);
console.log(typeof num3, typeof num4);

//type-casting
console.log(num3 + Number(num4));
console.log(typeof num3, typeof Number(num4));

//NAN - Not a Number

let num5 = 50;
let num6 = "10A";

if (isNaN(num6)) {
  console.log(num6 + " is not a valid number to perform addition.");
} else {
  console.log(num5 + num6);
}

let num7 = 50;
let num8 = "20";

console.log(typeof num7, typeof num8);
console.log(num7 - num8);

console.log("Assignment Operators");

let age = 50;
age = 25;

let num9 = 12;
let num10 = 15;

console.log(num9 > num10);
console.log(num9 >= num10);
console.log(num9 < num10);
console.log(num9 <= num10);
console.log(num9 == num10);
console.log(num9 === num10);

console.log("Logical operators");
console.log(true && false);
console.log(true && true);
console.log(false && true);
console.log(false && false);
console.log(true || false);
console.log(true || true);
console.log(false || true);
console.log(false || false);

let isSalaryCredited = false;
console.log("Salary Credited? " + isSalaryCredited);
console.log("Salary Credited? " + !isSalaryCredited);

console.log("Ternary operator");

let myAge = 25;
let hasDrivingLicense = myAge >= 18 ? "Yes" : "No";
console.log("You have your driving license? " + hasDrivingLicense);

let num11 = 100;
let num12 = "100";

if (num11 == num12) {
  console.log("Both are same");
} else {
  console.log("Both are not same");
}

if (num11 === num12) {
  console.log("Both are same");
} else {
  console.log("Both are not same");
}

console.log("ajay" == "Ajay");
console.log("ajay" === "Ajay");

let num13 = null;
let num14;

console.log(typeof num13, typeof num14);
console.log(num13 == num14);
console.log(num13 === num14);
