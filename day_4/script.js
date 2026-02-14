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
console.log("-----------------------");

// Map Collection
console.log("Map Collection");

let myMap = new Map();
console.log(myMap);
myMap.set("1", "Ajay");
myMap.set(2, "Kumar");
myMap.set(3, 60);
myMap.set(false, "No");
console.log("My Map: ", myMap);

// to access values from map
console.log(myMap.get("1"));
console.log(myMap.get(3));
console.log(myMap.get(false));
console.log(`Map Size: ${myMap.size}`);

let favPlaces = new Map([
  ["Jaipur", "Palace"],
  ["Pune", "Fort"],
]);
console.log("Fav Places:", favPlaces);

for (let curItem of myMap) {
  console.log(curItem);
}

for (let [key, value] of myMap) {
  console.log(`${myMap.get(key)}`);
  console.log(`${key} - ${value}`);
}

for (let [key, value] of favPlaces) {
  console.log(`${key} = ${value}`);
}

for (let currentKey of myMap.keys()) {
  console.log(`Key - ${currentKey}`);
}
for (let currentValue of myMap.values()) {
  console.log(`Value - ${currentValue}`);
}

// Set Collection
console.log("Set Collection");

let mySet = new Set();
console.log(mySet);
mySet.add("Burger");
mySet.add("Pizza");
mySet.add("Sandwich");
mySet.add("Pizza");
mySet.add("Chat");
console.log(mySet);

console.log(mySet.has("Drink"));
mySet.delete("Burger");
console.log(mySet);
console.log(mySet.size);

for (let currentItem of mySet) {
  console.log(currentItem);
}

let colors = new Set(["Red", "Blue", "Green", "Blue", "Violet"]);
console.log(colors);

for (let color of colors) {
  console.log(color);
}
