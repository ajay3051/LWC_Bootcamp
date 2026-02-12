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
