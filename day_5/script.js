console.log("Welcome to day-5");

// Function declaration
console.log("Function declaration");

function calc1(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

//function expression
let calc2 = function (number1, number2) {
  if (number2) {
    let sum = number1 + number2;
    return sum;
  } else {
    return number1;
  }
};

let calc1Sum = calc1(10, 20);
console.log(calc1Sum);

let calc2Sum = calc2(8, 9);
console.log(calc2Sum);

let calc3Sum = calc2(12);
console.log(calc3Sum);

// Arrow Function

let calc3 = (number1, number2) => {
  if (number2) {
    let sum = number1 + number2;
    return sum;
  }
};

let calc4Sum = calc3(22, 56);
console.log("Sum: " + calc4Sum);

let greet = (message) => `Hello ${message}`;
console.log(greet("Good Morning"));

// call back function
let greeting = (name, callme) => {
  console.log(`Hello ${name}`);
  callme();
};

function greetMe() {
  console.log("Welcome to goa");
}

greeting("Ajay", greetMe);
