function Student(name, age) {
    this.name = name;
    this.age = age;
}
Student.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const student1 = new Student("Alice", 20);
student1.greet();
const student2 = new Student("Bob", 22);
student2.greet();

function 


