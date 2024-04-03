// Include some whitespace characters at the beginning and end of the name then print the name after striping the white spaces. 

let personName: string = '\t    Muhammad Kashif      \n';
console.log('Name With Whitespace:', personName);
let strippedName: string = personName.trim();
console.log('Stripped name:', strippedName);
