// Array of magician’s names
var magicianNames = ['Harry Porter', 'David Copperfield', 'Hermione Granger', 'Professor Albus Dumbledore', 'Ron Weasley'];
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function 
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "The Great ".concat(magician); });
    return greatMagicians;
}
// Modify the array 
var greatMagicianNames = make_great(magicianNames);
// Call the function
console.log('\nGreat Magicians:');
showMagicians(greatMagicianNames);
