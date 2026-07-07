// if statement

// const userage = 13;

// if (userAge >= 18){
   // console.log("user can vote");
//}

//console.log("other codes can run....");

// sequential control flow
let name = "John";

console.log(name);

console.log("Welcome!");

console.log("Let's learn JavaScript.");


// if else statements
const value = 40;

if (value % 2 === 0) {
    console.log(`${value} is even `);

} else {
      console.log(`${value} is odd `);

}
// conditional control flow

const studentScore = 25;

if (studentScore > 30) {
    console.log("Above range");
} else if (studentScore >= 20 && studentScore <= 30) {
    console.log("Great score");
} else if (studentScore >= 15 && studentScore <= 19) {
    console.log("Good score");
} else {
    console.log("Can do better");
}


const studentGrade = 80; 

if (studentGrade > 90) {
    console.log("Grade A");

} else if (studentGrade  >= 70 ) {
     console.log("Grade B");
} else if (studentGrade >= 50 ) {
    console.log("Grade C");
}else  (studentGrade >=50 ) 
    console.log("Fail");

    

let studentScore1 = 100;
if (studentScore >=90 ){
    console.log("Grade A")
}
else if (studentScore >= 70){
    console.log("Grade B")
}
else if (studentScore >= 50){
    console.log("Grade C")
}
else {
    console.log("Fail")
}


// switch statement

/*
0 monday
1 tuesday
2 wensd
3 thrus
4 frid
5 satu
6 sunday 
*/
const day = 9;
switch (day) {
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4:
        console.log("Friday");
        break;
    case 5:
        console.log("Saturday");
        break;
    case 6:
        console.log("Sunday");
        break;

    default:
    console.log("Invalid day number");

}

const elevatorFloor = 3;
switch (elevatorFloor) {
    case 1:
        console.log("You are on the first floor.");
        break;
    case 2:
        console.log("You are on the second floor.");
        break;
    case 3:
        console.log("You are on the third floor.");
        break;
    case 4:
        console.log("You are on the fourth floor.");    
    default:
        console.log("Invalid floor number.");
}

const dayNumber = 1;
switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;

    case 4: 
    console.log("Thursday");
    break;



}    

let age = 18;

if (age >= 18) {
    console.log("You can vote.");
}
else  {
    console.log("You are too young to vote.");
    
}

// loops

for (let i = 1; i <= 5; i++) {
    console.log("Hello");
}


const userAcess = "admin";
if (userAcess === "admin") {
    console.log("Welcome Admin");
} else if (userAcess === "user") {
    console.log("Welcome User");
} else {
    console.log("Access Denied");

}

let fruit = "banana";

switch (fruit) {
    case "apple":
        console.log("This is an apple.");
        case "banana":
        console.log("This is a banana.");
        break;
    default:
        console.log("Unknown fruit.");

        }

const studentScore2 = 50;

// 0 - 15 ====> print "poor score"
// 16 - 30 ====> print "average score"
// 31 - 50 ====> print "good score"
// 51 - 70 ====> print "great score"
// otherwise print "not a valid score"


switch (true) {
    case (studentScore2 <= 15):
        console.log("poor score");
        break;
    case (studentScore2 <= 30):
        console.log("average score");
        break;
    case (studentScore2 <= 50):
        console.log("good score");
        break;
    case (studentScore2 <= 70):
        console.log("great score");
        break;
    default:
        console.log("not a valid score");
}

