// List of animal with a common characteristics
var animals = ['Cat', 'Dog', 'Goat'];
// Print the names of each using FOR loop
console.log('List of animals:');
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Print statement about easch animal
console.log("\nStatement about each animals:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    if (animal === 'Cat') {
        console.log("A ".concat(animal, " is a good companion at home."));
    }
    else if (animal === 'Dog') {
        console.log("A ".concat(animal, " is a faithful pet."));
    }
    else if (animal === 'Goat') {
        console.log("A ".concat(animal, " is benificial pet as it gives milk."));
    }
}
// Common characteristics
console.log("\nWhat these animals have in common:");
console.log("These animals could be a great pet and they have ability to form social bonds with humans ");
