import { generateRandomImage, generateRandomImageSize } from "./picsum.js";

const img = generateRandomImage();
document.body.append(img);

// Simple object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person.name);
console.log(person.age);
console.log(person.city);

person.name = "Jane";
console.log(person.name);

// Constructor function
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

// Add method using prototype
Person.prototype.introduce = function () {
    console.log(`Hi, I'm ${this.name} from ${this.city}.`);
};

Person.prototype.isAdult = function () {
    return this.age >= 18;
};

const person1 = new Person("Alice", 25, "Los Angeles");

console.log(person1.name);
console.log(person1.age);
console.log(person1.city);

// Using prototype methods
person1.introduce();          // Hi, I'm Alice from Los Angeles.
console.log(person1.isAdult()); // true


// Using call and bind
const person2 = {
    name: "Bob",
    age: 35,
    city: "Chicago"
};

function greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old from ${this.city}.`);
}

greet.call(person1);

const greetPerson2 = greet.bind(person2);
greetPerson2();