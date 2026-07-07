// if else 

const yearsOfExperience = 2;
const salary = yearsOfExperience > 2 ? "NGN800,000" : "NGN400,000";
console.log(salary);

// comparison with nullish coalescing operator

const productPrice = null;
console.log(productPrice ?? "Price not available");

// Example 2

const TrafficLight = "green";
const printTrafficLight = 
TrafficLight === "green" ? "Go" : 
TrafficLight === "yellow" ? "Slow down" :
TrafficLight === "red" ? "Stop" : "Invalid traffic light color";
console.log(printTrafficLight);



/* 
============= Class Excercise ============

- Create two variables named num1 and num2 and assign them any numbers.
- Calculate the sum of the two numbers and store it in a variable called sum.

- Use a ternary operator to check if the sum is even or odd.

Display the following in the console:
- The value of num1
- The value of num2
- The sum
- Whether the sum is Even or Odd

*/


const num1 = 10;
const num2 = 22;
const sum = num1 + num2;
console.log(num1);
console.log(num2);
console.log(sum);
console.log(sum % 2)
console.log(sum % 2 === 0 ? "Even" : "Odd");
