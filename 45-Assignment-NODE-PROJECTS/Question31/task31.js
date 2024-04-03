"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emptyUserNames = [];
var userNames = ['admin', 'Muhammad Kashif', 'Faraz Anwar', 'Muhammad Faizan', 'Muhammad Areeb'];
function greetingUsers(usernames) {
    if (usernames.length === 0) {
        console.log('We need to find some users!');
        return;
    }
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log("Hello ".concat(userNames, ", thank you for logging in again."));
        }
    }
}
console.log('For non empty usernames:\n');
greetingUsers(userNames);
userNames = [];
console.log('\nFor empty username:\n');
greetingUsers(userNames);
