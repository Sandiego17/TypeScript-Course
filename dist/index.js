"use strict";
var myAge = 35;
console.log(myAge);
var age = 35;
var firstName = "Henry";
var isFictional = true;
let something;
let anotherThing;
// ARRAYS
let names = ['Henry', 'Tochukwu', 'Uzor'];
let ages = [25, 28, 24];
let bools = [true, false];
names.push('Anuoluwapo', 'Ekomobong');
ages.push(35);
bools.pop();
console.log(names, ages, bools);
// type inference with ARRAYS
let fruits = ['apple', 'pears', 'bananas', 'mangos'];
let things = [1, true, 'hello'];
fruits.push('peaches');
const f = fruits[3];
console.log(fruits);
console.log('Variable "f" is of datatype:', typeof (f), 'and value of:', f);
console.log(typeof (things));
// OBJECT LITERALS
let user = {
    id: 1,
    firstName: 'Mario',
    age: 32
};
user.id = 2;
user.firstName = 'Pikanto';
console.log(user);
// type inference with OBJECT LITERALS
let person = {
    name: 'Luigi',
    score: 35
};
person.name = 'Votron';
person.score = 40;
console.log(person);
// TypeScript Functions
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
const addAllNumbers = (X) => {
    const total = X.reduce((a, b) => a + b, 0);
    console.log('The cummulative total of the numbers in the array is: ' + total);
};
addTwoNumbers(3, 9);
subtractTwoNumbers(10, 4);
addAllNumbers([5, 7, 9, 11, 13, 12, 10]);
// return type inference
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const greetingResult = formatGreeting('mario', 'hello');
// any type
let collection = ['hello', true, 30, null, undefined];
collection.push({ id: 123 });
console.log(collection);
// tuple type
var person1 = ['Henry', 30, true];
var hsla;
hsla = [200, '100%', '50%', 1];
let xy;
xy = [94.7, 20.1];
function useCords() {
    // get cords
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCords();
// named tuples
let userID;
userID = ['Potato', 25];
console.log(userID[0]);
const authorOne = { name: 'mario', avatar: '/img/mario.png' };
const newPost = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne
};
// interfaces as function argument types
function createPost(post) {
    console.log(`I created post ${post.title}, by ${post.author.name}!`);
}
createPost(newPost);
// interfaces with ARRAYS
let posts = [];
posts.push(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = { name: 'mario', score: 75 };
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}`);
}
formatUser(userOne);
formatUser({ name: 'luigi', score: 100 });
// union types
let someId;
someId = 1;
someId = 'string';
let email = null;
email = 'mario@gmail.com';
email = null;
let anotherId;
anotherId = 'igwetupac';
anotherId = 5;
// type guards
function swapIdType(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else if (typeof id === 'number') {
        return id.toString();
    }
    else {
        return null;
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('2');
const idThree = swapIdType(true);
console.log(idOne, idTwo, idThree);
function logDetails(value) {
    if (value.type === 'user') {
        console.log(`User: ${value.username} with email address: ${value.email} is logged in.`);
    }
    else if (value.type === 'person') {
        console.log(`A man named ${value.firstname}, is ${value.age} years old.`);
    }
}
const newUser = {
    type: 'user',
    username: 'Sandiego17',
    email: 'sandiego2all2014@gmail.com',
    id: 1
};
const newPerson = {
    type: 'person',
    firstname: 'Henry',
    age: 35,
    id: 2
};
logDetails(newUser);
logDetails(newPerson);
