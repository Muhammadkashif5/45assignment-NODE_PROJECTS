"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
var guestList = [
    'Faraz Anwar',
    'Muhammad Faizan',
    'Haseeb Ali Khan'
];
exports.guestList = guestList;
//Print the name of person who can't join us for Dinner.
var guestWhoCantMakeIt = 'Muhammad Faizan';
console.log("".concat(guestWhoCantMakeIt, " can't join us for Dinner."));
//Replace the name of guest.
var NewGuest = 'Muhammad Areeb';
var indexOfguestWhocantMAkeIt = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfguestWhocantMAkeIt !== -1) {
    guestList[indexOfguestWhocantMAkeIt] = NewGuest;
}
//Print second set of invitation
console.log('Second set of invitation messages:');
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", We\u2019re having a dinner tonight and we\u2019d love for you to join us."));
});
