// More Conditional Tests: 

// Tests for equality and inequality with strings.
const str1: string = 'Alpha';
const str2: string = 'alpha';

console.log(str1 === str2); //False
console.log(str1 !== str2); //True

// Tests using the lower case function.
const text1: string = 'Muhammad Kashif';
const text2: string = 'muhammad kashif';

console.log(text1.toLowerCase() === text2); //True

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
const num1: number = 20;
const num2: number = 10;

console.log(num1 === num2); //False
console.log(num1 !== num2); //True
console.log(num1 > num2);   //True
console.log(num1 < num2);   //False
console.log(num1 >= num2);  //True
console.log(num1 <= num2);  //False

// Tests using "and" and "or" operators.
const x: number = 15;
const y: number = 20;
const z: number = 25;

console.log(x < y && y < z); //True, both conditions are true
console.log(x < y || y < z); //True, atleast one condition is true
console.log(x > y && y > z); //False, both conditions are false
console.log(x > y || y > z); //False, both conditions are false

// Test whether an item is in a array
const fruits: string[] = ['apple', 'banana', 'orange', 'grapes'];

console.log(fruits.includes('banana'));       //True
console.log(fruits.includes('water melon'));  //False

// Test whether an item is not in a array
const cars: string[] = ['BMW', 'AMG', 'Bugatti', 'Ferrari'];

console.log(cars.includes('Bugatti'));      //True
console.log(cars.includes('Rolls Royce'));  //False


// lib error is showing when compiling but still code is execute.