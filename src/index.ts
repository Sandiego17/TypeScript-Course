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

// TypeScript Functions
function addTwoNumbers (a: number, b: number): number {
  return a + b;
}

const subtractTwoNumbers = (a: number, b: number): number => {
  return a - b;
};

const addAllNumbers = (X: number[]) => {
  const total = X.reduce((a, b) => a + b, 0);
  console.log('The cummulative total of the numbers in the array is: ' + total);
};

addTwoNumbers(3, 9);
subtractTwoNumbers(10, 4);
addAllNumbers([5, 7, 9, 11, 13, 12, 10]);

// return type inference
function formatGreeting (name: string, greeting: string): string {
  return `${greeting}, ${name}`;
}

const greetingResult = formatGreeting('mario', 'hello')

// any type
let collection: any[] = ['hello', true, 30, null, undefined];

collection.push({id: 123});

console.log(collection);

// tuple type
var person1: [string, number, boolean] = ['Henry', 30, true];

var hsla: [number, string, string, number];
hsla = [200, '100%', '50%', 1];

let xy: [number, number];
xy = [94.7, 20.1];

function useCords(): [number, number] {
  // get cords

  const lat = 100;
  const long = 50;

  return [lat, long];
}

const [lat, long] = useCords();

// named tuples
let userID: [name: string, age: number];

userID = ['Potato', 25];
console.log(userID[0]);

// interfaces
interface Author {
  name: string
  avatar: string
}

interface Post {
  title: string
  body: string
  tags: string[]
  create_at: Date
  author: Author
}

const authorOne: Author = { name: 'mario', avatar: '/img/mario.png' };

const newPost: Post = {
  title: 'my first post',
  body: 'something interesting',
  tags: ['gaming', 'tech'],
  create_at: new Date(),
  author: authorOne
};

// interfaces as function argument types
function createPost (post: Post): void {
  console.log(`I created post ${post.title}, by ${post.author.name}!`);
}

createPost(newPost);

// interfaces with ARRAYS
let posts: Post[] = [];

posts.push(newPost);

// type alias with tuple
type Rgb = [number, number, number]

function getRandomColor(): Rgb {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b];
}

const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);

// type alias with object literal
type User = {
  name: string
  score: number
}

const userOne: User = { name: 'mario', score: 75 };

function formatUser(user: User): void {
  console.log(`${user.name} has a score of ${user.score}`);
}

formatUser(userOne);
formatUser({ name: 'luigi', score: 100 });

// union types
let someId: number | string;
someId = 1;
someId = 'string';

let email: string | null = null;

email = 'mario@gmail.com';
email = null;

type Id = number | string | boolean;
let anotherId: Id;

anotherId = 'igwetupac';
anotherId = 5;

// type guards
function swapIdType (id: Id) {
  if (typeof id === 'string') {
    return parseInt(id);
  } else if (typeof id === 'number') {
    return id.toString();
  } else {
    return null;
  }
}

const idOne = swapIdType(1);
const idTwo = swapIdType('2');
const idThree = swapIdType(true);

console.log(idOne, idTwo, idThree);

// tagged interfaces
interface Users {
  type: 'user'
  username: string
  email: string
  id: Id
}

interface Persons {
  type: 'person'
  firstname: string
  age: number
  id: Id
}

function logDetails (value: Users | Persons): void {
  if (value.type === 'user') {
    console.log(`User: ${value.username} with email address: ${value.email} is logged in.`);
  } else if (value.type === 'person') {
    console.log(`A man named ${value.firstname}, is ${value.age} years old.`);
  }
}

const newUser: Users = {
  type: 'user',
  username: 'Sandiego17',
  email: 'sandiego2all2014@gmail.com',
  id: 1
};

const newPerson: Persons = {
  type: 'person',
  firstname: 'Henry',
  age: 35,
  id: 2
};

logDetails(newUser);
logDetails(newPerson);
