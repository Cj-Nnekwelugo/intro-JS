const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// while loop
// 1 - 10 
for (let i = 1; i <= 10; i++) {
    console.log(i);

}


let count = 1;

let count = 1;
while (count <= 10) {
    console.log(count);
    count++;
}

let otp = Math.floor(Math.random() * 9000) + 1000;

console.log(otp);






// for in loop 

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (const key in person) {
    console.log(key);
}
