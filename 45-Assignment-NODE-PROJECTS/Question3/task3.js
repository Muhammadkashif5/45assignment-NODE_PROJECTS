// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Lower Case
var personName = 'MuhaMMad KaSHif';
var lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
// Upper Case
var uppercaseName = personName.toUpperCase();
console.log(uppercaseName);
// Title Case
var person_name = 'muhammad kashif';
var words = person_name.split(' ');
var titlecaseName = '';
for (var i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + ' ';
}
;
console.log(titlecaseName);
