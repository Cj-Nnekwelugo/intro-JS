// object in non primitive data type and mutable data type


 let person = {
    name: "John Doe",
    age: 30,
    isStudent: true
};
// to change the name of the person we call it dot notation

person.name = "Jane Doe";

// or using bracket notation
person["name"] = "chijioke";
console.log(person); 


// arrry used for list of items
let selectedColors = ["red", "blue", "green"];
selectedColors[3] = "7";
console.log(selectedColors.length);

// functions are also objects in javascript


function greet(name, lastName) {
    console.log("Hello, " + name + " " + lastName);
}

greet("Chibuzor", "Nnekwelugo"); 


