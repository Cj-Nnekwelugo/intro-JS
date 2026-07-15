let foods = ["Pizza", "Burger", "Pasta", "Sushi", "Tacos"];
console.log(foods); 

// arrays and loops
let fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
for (let i = 0; i < 5; i++) {
    console.log(fruits[i]);
}

let fruit = ["Apple", "Banana", "Orange"];

console.log(fruit.length);

// array methods

// 1 push() method push() Adds an item to the end of an array. 

let fruits = ["Apple", "Banana"];

fruits.push("Orange");

console.log(fruits);

// 2 pop() method pop() Removes the last item from an array.

let fruits = ["Apple", "Banana", "Orange"];

fruits.pop();

console.log(fruits);


// 3 shift() method shift() Removes the first item from an array.

let fruits = ["Apple", "Banana", "Orange"];
fruits.shift();
console.log(fruits);
