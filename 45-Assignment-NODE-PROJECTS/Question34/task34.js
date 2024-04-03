// Array of favorite pizzas
var favoritePizzas = ['Chicken Fajita', 'Chicken Tikka', 'Papperoni'];
// Print the name using FOR loop
console.log("My favorite pizzas are:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
// Print sentence for each pizza
console.log("\nI like these pizzas: ");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log("I like ".concat(favoritePizzas[i], " pizzas."));
}
// Print an additional sentence
console.log("\nI really love these pizza!  they suggests a diverse palate with a preference for savory, flavorful combinations.");
