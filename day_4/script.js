console.log("Welcome to Day-4");

let myFavCars = ["Audi", "BMW", "Maruti", "Hyumdai", "Tata"];
let myDetails = {
  fName: "Ajay",
  lName: "Kumar",
  age: 25,
};

// Traditional For Loop
console.log("Traditional For Loop");
for (let i = 0; i < myFavCars.length; i++) {
  console.log(`${i + 1})${myFavCars[i]}`);
}

// While Loop
console.log("Whle Loop");
let i = 0;
while (i < myFavCars.length) {
  console.log(`${myFavCars[i]}`);
  i++;
}

// Do-While loop
console.log("Do-While Loop");
let curValue = 0;
do {
  console.log(`${myFavCars[curValue]}`);
  curValue++;
} while (curValue < myFavCars.length);

// for-of loop
console.log("For-Of Loop");
for (let car of myFavCars) {
  console.log(`Car: ${car}`);
}

for (let car of myFavCars.entries()) {
  console.log("Item", car);
}

for (let [index, car] of myFavCars.entries()) {
  console.log(`${index + 1}.${car}`);
}

/* to make objects iterable, we have 3 methods
    1) object.keys()
    2) object.values()
    3)object.entries()
*/

for (let currentKey of Object.keys(myDetails)) {
  console.log(`Current Key: ${currentKey}`);
  console.log(`${currentKey}: ${myDetails[currentKey]}`);
}

for (let currentItem of Object.values(myDetails)) {
  console.log(`Current Item: ${currentItem}`);
}

for (let [key, value] of Object.entries(myDetails)) {
  console.log(`${key} - ${value}`);
}

// For-In Loop
console.log(`For In Loop`);

for (let currentItem in myFavCars) {
  console.log(currentItem);
}
for (let currentItem in myFavCars) {
  console.log(`${myFavCars[currentItem]}`);
}
console.log("----------------");
for (let currentItem in myDetails) {
  console.log(myDetails[currentItem]);
}

console.log("=====================");

let openingHours = {
  thu: { open: "10:00 AM", close: "6:00 PM" },
  fri: { open: "11:00 AM", close: "5:00 PM" },
  sat: { open: "8:00 AM", close: "2:00 PM" },
};

for (let currentDay in openingHours) {
  console.log(currentDay);
  let { open, close } = openingHours[currentDay];
  console.log(`${open} ${close}`);
  console.log(`On ${currentDay} office starts at ${open} and ends at ${close}`);
}
console.log("-----------------");
for (let currentDay of Object.keys(openingHours)) {
  console.log(currentDay);
  console.log(openingHours[currentDay]);
  let { open, close } = openingHours[currentDay];
  console.log(
    `On ${currentDay} office opens at ${open} and office close at ${close}`,
  );
}
console.log("----------------");
for (let [day, { open, close }] of Object.entries(openingHours)) {
  console.log(`${day} - ${open} - ${close}`);
}
