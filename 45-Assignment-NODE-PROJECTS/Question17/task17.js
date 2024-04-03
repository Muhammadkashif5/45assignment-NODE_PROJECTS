var guestList = [
    'Fazal Azeem',
    'Faraz Anwar',
    'Shakir Ali',
    'Muhammad Faizan',
    'Haseeb Ali Khan',
    'Bilal Ahmed'
];
// Step 1 Prints a message saying that you can invite only two people for dinner.
console.log("I am invite only two people for dinner.");
// Step 2 Remove guests from your list one at a time until only two names remain in your list. 
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Dear, ".concat(removeGuest, ", sorry i can\u2019t invite you to dinner."));
}
// Step 3 Print a message to each of the two people still on your list.
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear, ".concat(guest, " you are still invited to dinner."));
}
// Step 4 Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestList.pop();
guestList.pop();
console.log("Guest List at the end of program", guestList);
