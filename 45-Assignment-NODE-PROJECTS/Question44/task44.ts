function makeSandwitch(...items: string[]): void {
    console.log('Sandwitch Summary:');
    if (items.length === 0) {
        console.log('    - You ordered an empty samdwitch. Please add items.');
    } else {
        items.forEach((item, i) => {
            console.log(`     ${i + 1}. ${item}`);
        });
    }
    console.log('\n');
}

// Call the function 
makeSandwitch()
makeSandwitch('Mayonnaise', 'Tomato', 'Lettuce');
makeSandwitch('Ham', 'Cheese');
makeSandwitch('Peanut Butter', 'Jelly', 'Honey', 'Banana');