const sentence = "Count";


console.log(sentence.slice(1, 4));

const word = "i am learning javascript";


console.log(word.slice(0, 13));
console.log(word.slice(14));

let myNmae = "chiemezie";

console.log(myNmae.charAt(4));
const firstLetter = myNmae.charAt(0).toUpperCase();
const restOfName = myNmae.slice(1);
console.log(firstLetter + restOfName);

const user = "max well";
console.log(user.length);

const message = "welcome to the world of tech";
console.log(message.length);

const person = {
    name: "John chibu",
    age: 22,
    hobbies: ["singing", "football", "learning"],
    getBirthYear: function() {
        return new Date().getFullYear() -this.age
    }
}
console.log(person.hobbies);
console.log(person.getBirthYear);

const hi = "how are you";
console.log(hi.toUpperCase);

// indexof

const text = "Everyone is great at something";
console.log(text.indexOf("is"));

// lastindexof

console.log(text.lastIndexOf("is"));

// includes
console.log(text.includes("where"));

// replace

const welcomeText = "welcome JS to leraning JS";
console.log(welcomeText.replace("JS", "Javascript"));

//