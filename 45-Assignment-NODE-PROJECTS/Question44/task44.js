function makeSandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Sandwitch Summary:');
    if (items.length === 0) {
        console.log('    - You ordered an empty samdwitch. Please add items.');
    }
    else {
        items.forEach(function (item, i) {
            console.log("     ".concat(i + 1, ". ").concat(item));
        });
    }
    console.log('\n');
}
// Call the function 
makeSandwitch();
makeSandwitch('Mayonnaise', 'Tomato', 'Lettuce');
makeSandwitch('Ham', 'Cheese');
makeSandwitch('Peanut Butter', 'Jelly', 'Honey', 'Banana');
