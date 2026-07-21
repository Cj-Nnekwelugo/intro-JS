// Definition of function 
function sayHello() {
    console.log("Hello, World!");
}

sayHello();
sayHello();
sayHello();


// function declaration , Anonymous function, Arrow function
const user = {
    name: 'John',
    age: 30,
    getbirthYear: function() {
        return new Date().getFullYear() - this.age;
    }
}
console.log(user.getbirthYear());


function hi(){
    console.log("Hello Michael")
}
hi();


function introduction(){
    console.log("My name is John and I am 30 years old.");
    console.log("I live in New York City.");
}
introduction();


/* 
========== Class Activity =================

Write a function called getEvenNumbers that prints even numbers between 1 to 20, each on a new line.

*/

function getEvenNumbers(){
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
    }


}
    getEvenNumbers();

// functions with return keywords

function returnString() {
    return "My string";

}
console.log(returnString());


// 2
function addTwoNumbers() {
    const num1 = 5;
    const num2 = 10;
    return num1 + num2;
}

function displayResult() {
    const result = addTwoNumbers();
    console.log(result);
}
displayResult();

// 3
function doExponnent() {
    const base = 2;
    const power = 3;
    return Math.pow(base, power);
}

const displayExponentResult = ` The result of 2 raised to the power of 3 is: ${doExponnent()}`;
console.log(displayExponentResult);

// parameters very good for reusability of code best

function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(sumTwoNumbers(5, 10));
console.log(sumTwoNumbers(20, 30));


function calculateAreaOfRectangle(length, breadth) {
    return length * breadth;
}
const areaOfRectangle = calculateAreaOfRectangle(5, 10);
console.log(areaOfRectangle);



/* 
=========== Class Activity ==============

Create a function called calculateTotal that accepts three numbers as parameters representing the prices of three items.

The function should:

- Calculate the total price.
- Display the total.
- Use a ternary operator to display:
	- "Eligible for Free Delivery" if the total is ₦10,000 or more.
	- "Delivery Fee Applies" otherwise.

*/

function calculateTotal(price1, price2, price3) {
    const total = price1 + price2 + price3;
    console.log(`Total Price: ₦${total}`);
    const deliveryMessage = total >= 10000 ? "Eligible for Free Delivery" : "Delivery Fee Applies";
    console.log(deliveryMessage);
}
calculateTotal(3000, 4000, 5000);


function calculateKelvinTemp(tempInCelsius) {
    return 273 + tempInCelsius;

}
console.log(calculateKelvinTemp(25));


// function expressions (ananymous function)

const subtractTwoNumbers = function(num1, num2) {
  console.log(num1 - num2);
}
subtractTwoNumbers(10, 5);


const person = {
    name: 'John',
    age: 30,
    getbirthYear: function() {
        return new Date().getFullYear() - this.age;
    }

}
console.log(person.getbirthYear());


/* 
========== Class Activity ============

Write a function called calculateBMI that takes weight (in kg) and height (in meters) and prints the BMI. Formula: BMI = weight / (height × height)

*/

const calculateBMI = function (weight, height) {
    return weight / (height ** 2);

}
console.log(calculateBMI(70, 1.7));



// arrow function 
{
    const addTwoNumbers = () => {

    }
    const addTwoNumbersWithParams = (num1, num2) => {

    }
}


// implicit arrow functions

{
    const addTwoNumbers = (num1, num2,) => num1 + num2;
    console.log(addTwoNumbers(10, 9));

    const greetUser = (name) => console.log(`hello $(name)`);
    greetUser("john");

    const sayHello = () => console.log("Hello world")
    sayHello();
}

/* ========= Class Activity =================
Write a function called getStringLength that takes a string and prints its length.

*/

// single variable
    const getStringLength = string => string.length;
    console.log(getStringLength("Cj"));



// Explicit arrow functions

/* 
============ Class Activity ============
Create a function called rectanglePerimeter that takes length and width as parameters and prints the perimeter. Formula: Perimeter = 2 × (length + width)

*/

{ // inplict
    let rectanglePerimeter = (length, width) => length * width;
    console.log(rectanglePerimeter(5, 4))

}
// explict
let rectanglePerimeter = (length, width) => {
    return length * width;
}

let area = rectanglePerimeter(5, 4);
console.log(area);



// callback function .a function that is passed as a argument to another function
{
    const addTwoNumbers = (x, y) => x + y;

    const doExponent  = (callback, x, + y) => {
    const sumResult = callback(x,y);
    console.log(sumResult ** 3);
}


    }






// working with dates ,date constructions and date methods