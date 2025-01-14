let myName: string = 'Henry';

function add(x: number, y: number): number {
  return x + y
};

// --------------
// Benefits of TypeScript
// --------------

// 1. better error feedback
function reverse (str: string) {
  return str.split('').reverse().join('')
};

const result = reverse('hello');

// 2. better auto-completion and code hints
const reversed = reverse('ninja');

// 3. ability to create custom data types in addition to standard data types
interface MenuItem {
  title: string
  cost: number
}

function printMenuItem (item: MenuItem) {
  console.log(item.title, ':', item.cost)
}

// --------------
// Type Assertions
// --------------
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
// OR
let strsLength: number = (<string>someValue).length;
