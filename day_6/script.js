console.log("Welcome to Day-6");

let myDetails = "My name is ajay";
console.log("MyDetails", myDetails);

//Length of string
console.log(`Length: ${myDetails.length}`);

//Extracting string
let text = "Apple, mango, Kiwi";
console.log(text);

//slice(start position, end position) (end position is not included)
//substring(start,end)

let sliceMango = text.slice(7, 12);
console.log(sliceMango);

let sliceRemainingFruits = text.slice(7);
console.log(sliceRemainingFruits);

//slice with negative start position
let part = text.slice(-1);
console.log(part);
console.log(text.slice(-12));

//substring(start position, end)
//in substring if you pass negative value in positions
//it will be treated as (0)

let substringMango = text.substring(7, 12);
console.log(substringMango);
let partSubstring = text.substring(-12);
console.log("partSubstring", partSubstring);

//replace
//replace will only replace the first match
//replace is case sensitive
//replace will not modify the existing string

let newFruitsText = text.replace("mango", "banana");
console.log(`newFruitsText ${newFruitsText}`);
console.log(`Original: ${text}`);

console.log(myDetails);

//uppercase
console.log(myDetails.toUpperCase());

//lowercase
console.log(myDetails.toLowerCase());

//concat
let text1 = "Hello";
let text2 = "Js";
console.log(text1.concat(" ", text2));

//trim(), trimStart(), trimEnd()
let trimMe = "       hello World         ";
console.log(trimMe);
console.log(trimMe.trim());
console.log(trimMe.trimStart());
console.log(trimMe.trimEnd());

//padStart(), padEnd();
let myNumber = "5"; // ****5
console.log(myNumber);
console.log(myNumber.padStart(5, "*"));
console.log(myNumber.padEnd(3, "Rs"));

//split()
//split method will always retur an array
//split method will convert string into array
let myCsvDetails = "Ankit,Amit,Nidhi,Manu,Ravi";
let myCsvDetailsArray = myCsvDetails.split(",");
console.log(myCsvDetailsArray);

//convert array into string
//toString(), join()
let myToString = myCsvDetailsArray.toString();
console.log(myToString);

let joinString = myCsvDetailsArray.join("*");
console.log(joinString);

//search the string
//indexOf() -- return the index position of a string. if not present it return -1
//includes() -- if present return true else false
console.log(text);
console.log(text.indexOf("banana")); //-1
console.log(text.indexOf("mango"));
console.log(text.includes("mango"));
console.log(text.includes("banana"));

//startsWith()
console.log(text.startsWith("Apple"));
console.log(text.startsWith("apple"));

//endsWith()
console.log(text.endsWith("Kiwi"));
console.log(text.endsWith("kiwi"));

//Remove duplicate in string
//break the string into array -- split()
//convert array into set -- conversion
//combine the set -- join

let myString = "Hello world world";
let myStringAray = myString.split(" ");
