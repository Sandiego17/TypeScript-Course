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

