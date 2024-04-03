const current_users = ['Muhammad Areeb', 'Fazal Azeem', 'Muhammad Naseer', 'Atif Nadeem', 'Imran Fazal', 'Muhammad Shakeel'];
const new_users = ['Muhammad Faizan', 'fazal azeem', 'Shaheer Rashid', 'imran Fazal', 'Haseeb Ali', 'aTif naDeem'];
function checkUserNames(current_users, new_users) {
    const lowercasedCurrentUsers = current_users.map(user => user.toLowerCase());
    for (const newUser of new_users) {
        const lowercasedNewUser = newUser.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedNewUser)) {
            console.log(`USername "${newUser}" is already taken. Please enter a new username.`);
        }
        else {
            console.log(`Username "${newUser}" is available.`);
        }
    }
}
checkUserNames(current_users, new_users);
export {};
