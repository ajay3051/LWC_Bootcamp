console.log("Today is Day-3");

// Javascript Objects

const myDetails = {
  fName: "Ajay",
  lName: "Kumar",
  age: 25,
  grade: 6.79,
  skills: ["Admin", "Development", "VCS"],
  isMarried: false,
};

console.log("My Details: ", myDetails);
console.log(typeof myDetails);

let jsonString = JSON.stringify(myDetails);
console.log(jsonString);
console.log(typeof jsonString);

let jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(typeof jsonObject);

// modify the object

myDetails.city = "Pamarru";
myDetails["DOB"] = "26/04/2000";
console.log(myDetails);

myDetails.age = 26;
console.log(myDetails);

myDetails["Mobile"] = "9988776655";

let gender = "Male";
myDetails["Gender"] = gender;
console.log(myDetails);

myDetails["Country Name"] = "India";
console.log(myDetails);

//Access the value from the object
let myCountry = myDetails["Country Name"];
console.log(myCountry);

let myDOB = myDetails.DOB;
console.log(myDOB);

// Spread Operator
console.log("Spread Operator");

// Usages of spread operator
// Expanding string
// Combining arrays
// Combining oject
// Creating new shallow copy of arrays and objects

// concatination of arrays
let numberOne = [1, 2, 3];
let numberTwo = [4, 5, 6];

console.log(numberOne);
console.log(numberTwo);

let combinedArray = [...numberOne, ...numberTwo];
console.log(combinedArray);

// expand the string
let myName = "My name is ajay kumar";
console.log(myName);
console.log(...myName);

// add elements in array
numberOne = [...numberOne, 10, 15, 20];
console.log(numberOne);

numberOne = [-15, 0, ...numberOne, 22, 56];
console.log(numberOne);

// adding the object
let myObj1 = {
  fName: "Ajay",
  Skills: ["Admin", "Apex", "LWC"],
};
console.log(myObj1);

let myObj2 = {
  lName: "Kumar",
  City: "Pamarru",
};
console.log(myObj2);

let finalObject = { ...myObj1, ...myObj2 };
console.log(finalObject);

// copy an array and object
let myFavFruits = ["Apple", "Banana", "Mango"];
console.log(myFavFruits);

let myFavFruitsCopy = myFavFruits;
console.log("Copy: ", myFavFruitsCopy);
myFavFruitsCopy.push("Goa");
console.log("Original", myFavFruits);
console.log("Deep Copy", myFavFruitsCopy);

let myFavCities = ["Vijayawada", "Guntur", "Hyderabad"];

let myFavCitiesCopy = [...myFavCities];

console.log("Original", myFavCities);
console.log("Copy", myFavCitiesCopy);

myFavCitiesCopy.push("Chennai");
console.log("Original", myFavCities);
console.log("Shallow Copy", myFavCitiesCopy);

myFavCities.push("Kakinada");
console.log(myFavCities);
console.log(myFavCitiesCopy);

let myDetailsCopy = { ...myDetails };
myDetailsCopy["Pincode"] = "521157";

console.log("Original", myDetails);
console.log("Shallow Copy", myDetailsCopy);

// Destructuring Assignment

let cities = ["Hyderabad", "Amaravathi", "Chennai", "Vijayawada"];

let [city1, city2, city3, city4] = cities;
console.log("City1: " + city1);
console.log("City2: " + city2);
console.log("City3: " + city3);
console.log("City4: " + city4);

let [hyd, , che, vij] = cities;
console.log(hyd);
console.log(che);
console.log(vij);

let [, city5, ...twinCities] = cities;
console.log(city5);
console.log(twinCities);

let { fName, lName, grade } = myDetails;
console.log(fName);
console.log(lName);
console.log(grade);

let { skills: ajaySkills, city: ajayCity } = myDetails;
console.log(ajaySkills);
console.log(ajayCity);

let myString = "Ajay";
let myStringCopy = [...myString];
console.log(myString);
console.log(myStringCopy);
