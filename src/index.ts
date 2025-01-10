var myAge: number = 35;

console.log(myAge);

var age: number = 35;
var firstName: string = "Henry";
var isFictional: boolean = true;

let something: null;
let anotherThing: undefined;
// ARRAYS
let names: string[] = ['Henry', 'Tochukwu', 'Uzor'];
let ages: number[] = [25, 28, 24];
let bools: boolean[] = [true, false];

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
console.log('Variable "f" is of datatype:', typeof(f), 'and value of:', f);
console.log(typeof(things));

// OBJECT LITERALS
let user: {id: number, firstName: string, age: number} = {
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

