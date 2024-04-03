// Array of magician’s names.
var magicianNames = ['Harry Porter', 'David Copperfield', 'Hermione Granger', 'Professor Albus Dumbledore', 'Ron Weasley'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var items = magicians_1[_i];
        console.log(items);
    }
}
// Call the function 
show_magicians(magicianNames);
