console.log("Hello Javascript");
console.log("Lightning Web Components");
console.error("This is error");
console.warn("This is warning");

// let keyword
// let can be re-assigned
// let is a local scope
// let cannot be re-declared

let name = "Ajay Kumar";
console.log("My Name: " + name);

// const keyword
// const cannot be re-assigned
// const cannot be re-declared
// const is a global scope

const dateOfBirth = "26-04-2000";
console.log("DOB: " + dateOfBirth);

const ajayObject = { fName: "Ajay", age: 25 };
console.log(ajayObject.fName);

ajayObject.fName = "Keerthi";
console.log(ajayObject.fName);

// var keyword
// var can be re-assigned
// var can be re-declared
// var is a global scope
// var is legacy

var subject = "Apex Programming";
console.log("Subject: " + subject);

var subject = "LWC";
console.log("New Subject: " + subject);
console.log(window.subject);

let myName = "Ajay";
console.log("Name: " + myName, "- Type: " + typeof myName);

let age = 25;
console.log("Age: " + age, "- Type: " + typeof age);

let isMarried = false;
console.log("Married? " + isMarried, "- Type: " + typeof isMarried);

let ajay = { city: "Pamarru", hasOwnHouse: true };
console.log(ajay);
console.log("Type: " + typeof ajay);

let fruits = ["Mango", "PineApple", "Orange", "Grapes"];
console.log(fruits);
console.log("Type: " + typeof fruits);

let gas = null;
console.log("Item: " + gas, "- Type: " + typeof gas);

let game;
console.log("Type: " + typeof game);
