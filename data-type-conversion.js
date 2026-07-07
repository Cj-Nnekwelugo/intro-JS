// Explicit type conversion


// number
let userAge = "75";
console.log(typeof userAge); // string

userAge = Number(userAge); 
console.log(typeof userAge); // number

{
console.log("Explict conversion")
console.log(Number("70"));
console.log(Number("70.998"));
console.log(Number("70.998px"));
}
// 2 parseInt
let numStr = "42";
let num = parseInt(numStr);
console.log(typeof num); // number
console.log(num); // 42

// 3 parseFloat good
let floatStr = "3.14";
let floatNum = parseFloat(floatStr);
console.log(typeof floatNum); // number
console.log(floatNum); // 3.14

// String
console.log(String(true));
console.log(String(35));



// toString()
console.log((57).toString())
let isLoggedIn = true;
console.log(isLoggedIn.toString());

// Bollean coversion

console.log("Boolean conversion");
console.log(Boolean("true"));
console.log(Boolean(1));
console.log(Boolean(76));
console.log(Boolean(null));
console.log(Boolean(76 > 1000));



// Object Conversion

// 1 stringify

const person = {
    firstName: "john",
    lastName: "doe",
    age: 26,
    role: "Senior backend dev"
};
const personString = JSON.stringify(person)
console.log(typeof personString);
 
// 2 parse

const personObj = JSON.parse(personString);
console.log(personObj);
console.log(personObj.role)