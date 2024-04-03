var userNames = ['admin', 'Muhammad Kashif', 'Faraz Anwar', 'Muhammad Faizan', 'Muhammad Areeb'];
function greetingUsers() {
    for (var i in userNames) {
        if (userNames[i].toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log("Hello ".concat(userNames[i], ", thank you for logging in again."));
        }
    }
}
greetingUsers();
