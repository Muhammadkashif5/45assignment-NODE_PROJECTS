// Make a list of people print a message to each person, inviting them to dinner.
var guestList = [
    'Faraz Anwar',
    'Muhammad Faizan',
    'Hasseb Ali Khan',
    'Hassan Zaki',
    'Yousuf Irfan'
];
guestList.forEach(function (guestName) {
    console.log("Dear ".concat(guestName, ", We\u2019re having a dinner tonight and we\u2019d love for you to join us."));
});
