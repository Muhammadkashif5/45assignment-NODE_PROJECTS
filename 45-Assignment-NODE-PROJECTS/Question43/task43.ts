// Array of magician’s names
const magicianNames: string[] = ['Harry Porter', 'David Copperfield', 'Hermione Granger', 'Professor Albus Dumbledore', 'Ron Weasley'];

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Function 
function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = magicians.map(magician => `The Great ${magician}`);
    return greatMagicians;
    }

// Modify the array 
const greatMagicianNames: string[] = make_great(magicianNames);

// Call the function
console.log('\nGreat Magicians:');
showMagicians(greatMagicianNames);