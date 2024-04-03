// List of animal with a common characteristics
const animals: string[] = ['Cat', 'Dog', 'Goat'];

// Print the names of each using FOR loop
console.log('List of animals:');
for (const animal of animals) {
    console.log(animal);
}

// Print statement about easch animal
console.log("\nStatement about each animals:");

for (const animal of animals) {
    if (animal === 'Cat') {
        console.log(`A ${animal} is a good companion at home.`);
    } else if (animal === 'Dog') {
        console.log(`A ${animal} is a faithful pet.`);
    } else if (animal === 'Goat') {
    console.log(`A ${animal} is benificial pet as it gives milk.`);
    }
}

// Common characteristics
console.log("\nWhat these animals have in common:")
console.log("These animals could be a great pet and they have ability to form social bonds with humans ")
