"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Function to create a fruit object
function createFruit(name, color, taste) {
    return {
        name: name,
        color: color,
        taste: taste,
    };
}
// Create an array of fruits
var fruits = [
    createFruit('Apple', 'Red', 'Sweet'),
    createFruit('Orange', 'Orange', 'Citrusy'),
    createFruit('Banana', 'Yellow', 'Sweet'),
    createFruit('Strawberry', 'Red', 'Sweet'),
    createFruit('Grapes', 'Purple/Green', 'Sweet'),
];
// Access an invalid index
var invalidIndex = 10;
console.log("Fruit at index ".concat(invalidIndex, ":"), fruits[invalidIndex]);
// Print the fruits
fruits.forEach(function (fruit) {
    console.log("Name: ".concat(fruit.name, ", Color: ").concat(fruit.color, ", Taste: ").concat(fruit.taste));
});
