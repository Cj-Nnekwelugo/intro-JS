/* 
=========== CLASS ACTIVITY ===============

const students = [
  { name: "Sarah", score: 75, age: 21 },
  { name: "Michael", score: 90, age: 22 },
  { name: "John", score: 75, age: 20 },
  { name: "Grace", score: 90, age: 20 },
  { name: "Daniel", score: 85, age: 21 },
  { name: "Esther", score: 75, age: 22 }
];

Sort the array:
(a) by name
(b) by score

*/


const students = [
  { name: "Sarah", score: 75, age: 21 },
  { name: "Michael", score: 90, age: 22 },
  { name: "John", score: 75, age: 20 },
  { name: "Grace", score: 90, age: 20 },
  { name: "Daniel", score: 85, age: 21 },
  { name: "Esther", score: 75, age: 22 }
];
const sortedByName = students.sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted by name:", sortedByName);

const sortedByScore = students.sort((a, b) => b.score - a.score);
console.log("Sorted by score:", sortedByScore);



