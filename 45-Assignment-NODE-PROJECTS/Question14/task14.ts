// Make a list of people print a message to each person, inviting them to dinner.

let guestList: Array<string> = [
    'Faraz Anwar',
    'Muhammad Faizan',
    'Hasseb Ali Khan',
    'Hassan Zaki',
    'Yousuf Irfan'
];

guestList.forEach((guestName) =>
{
    console.log(`Dear ${guestName}, We’re having a dinner tonight and we’d love for you to join us.`)
})