function getDiscountPrice(price, discount) {
    return price - (price * discount)
}

function handleOrder(cb, price, discountRate, itemName) {
    const totalAmount = cb(price, discountRate)
}
console.log()




// flexibility
// They can be usd to handle asychronus waiting
// they play a key role in event handling 



// Hoisting 
console.log(userName);
var userName = "Maxwell";
console.log(userName);

// Hoisting with let and const
console.log(role);
console.log(skills);
let role = "DevOps";
const skills = ["DevOps", "Frontend"];

// with function declaration
{
    sayHello()
    function sayHello() {
        console.log("Hello Word..");
    }
}





