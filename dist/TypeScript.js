"use strict";
let myName = 'Henry';
function add(x, y) {
    return x + y;
}
;
// --------------
// Benefits of TypeScript
// --------------
// 1. better error feedback
function reverse(str) {
    return str.split('').reverse().join('');
}
;
const result = reverse('hello');
// 2. better auto-completion and code hints
const reversed = reverse('ninja');
function printMenuItem(item) {
    console.log(item.title, ':', item.cost);
}
// --------------
// Type Assertions
// --------------
let someValue = "this is a string";
let strLength = someValue.length;
// OR
let strsLength = someValue.length;
