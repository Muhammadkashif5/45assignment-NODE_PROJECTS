const emptyUserNames: string[] = [];

let userNames: string[] = ['admin', 'Muhammad Kashif', 'Faraz Anwar', 'Muhammad Faizan', 'Muhammad Areeb'];

function greetingUsers(usernames: string[]): void {
        if (usernames.length === 0 ) {
            console.log('We need to find some users!');
        return;
    }

    for (const username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${userNames}, thank you for logging in again.`);
        }
    }
}
console.log('For non empty usernames:\n')
greetingUsers(userNames);

userNames = [];
console.log('\nFor empty username:\n')
greetingUsers(userNames);

export{};