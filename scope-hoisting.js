// block scope
const age = 19;
if (age >= 18){
    const message = "You can vote";
    console.log(message);
} else {
    const message = "you cannot vote";
    console.log("you cannot vote");
}


// var,let,const
// var is function scoped
// let and const have block scope

function double(){
    const num = 10;
    console.log(num * 2);
}

// console.log(num);