// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Lower Case
let personName: string = 'MuhaMMad KaSHif';
let lowercaseName: string = personName.toLowerCase();
console.log(lowercaseName);

// Upper Case
let uppercaseName: string = personName.toUpperCase();
console.log(uppercaseName);

// Title Case
let person_name: string = 'muhammad kashif';
let words: string[] = person_name.split(' ');
let titlecaseName: string = ''
for (let i = 0 ; i < words.length; i++) {
    titlecaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+' '
};
console.log(titlecaseName);

