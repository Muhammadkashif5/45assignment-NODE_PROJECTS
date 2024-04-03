// Function to create a fruit object
function createFruit(name: string, color: string, taste: string) {
    return {
        name,
        color,
        taste,
    };
}

// Create an array of fruits
const fruits = [
    createFruit('Apple', 'Red', 'Sweet'),
    createFruit('Orange', 'Orange', 'Citrusy'),
    createFruit('Banana', 'Yellow', 'Sweet'),
    createFruit('Strawberry', 'Red', 'Sweet'),
    createFruit('Grapes', 'Purple/Green', 'Sweet'),
];

// Access an invalid index
const invalidIndex = 10;
console.log(`Fruit at index ${invalidIndex}:`, fruits [invalidIndex])

// Print the fruits
fruits.forEach((fruit) => {
    console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Taste: ${fruit.taste}`);
});

export{};