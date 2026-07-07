// string concatenation is the process of joining two or more strings together to form a new string. In JavaScript, you can concatenate strings using the + operator or template literals.


const age= 35;
const firstName = "andrew";
const message = `${firstName} is ${age} years old`;
console.log(message);

// string interpolation 

const Name = "Chibuzor";
const greeting = "how are you doing ";
console.log(`${greeting} ${Name}`);

{
    const intro = "i am a software developer developing my skills in full stack web development,";
    const firstName = "Chibuzor";
    const age = 35;
    const message = `i am ${firstName} and ${intro} i am ${age} years old.`;
    console.log(message);
}

// Numeric coercion
const num1 = 5;
const num2 = 10;
const num3 = 20;
const result = num1 * num2 + num3; // 50
console.log(result);

{
    let a = 55;
    console.log(a + 5);
}
