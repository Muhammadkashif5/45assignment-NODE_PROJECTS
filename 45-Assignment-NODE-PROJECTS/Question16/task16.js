var guestList = [
    'Faraz Anwar',
    'Muhammad Faizan',
    'Haseeb Ali Khan'
];
// Step 1 Add a print statement to the end of your program informing people that you found a bigger dinner table.
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear, ".concat(guest, ", we found a bigger dinner table and we\u2019d love for you to join us."));
}
// Step 2 Add one new guest to the beginning of your array.
var newGuestAtBeginning = 'Fazal Azeem';
guestList.unshift(newGuestAtBeginning);
// console.log(guestList)
// Step 3 Add one new guest to the middle of your array.
var newGuestInMiddle = 'Shakir Ali';
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);
// console.log(guestList)
// Step 4 Use append() to add one new guest to the end of your list.
var newGuestAtEnd = 'Bilal Ahmed';
guestList.push(newGuestAtEnd);
// console.log(guestList)
// Step 5 Print a new set of invitation messages, one for each person in your list.
console.log('NEW SET OF INVITATION MESSAGES:');
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear, ".concat(guest, ", You are invited to dinner and we\u2019d love for you to join us."));
}
