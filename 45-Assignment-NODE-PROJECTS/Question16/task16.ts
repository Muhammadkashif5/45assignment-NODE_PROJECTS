let guestList: Array <string> =[
    'Faraz Anwar',
    'Muhammad Faizan',
    'Haseeb Ali Khan'
]

// Step 1 Add a print statement to the end of your program informing people that you found a bigger dinner table.
for (let guest of guestList) {
    console.log(`Dear, ${guest}, we found a bigger dinner table and we’d love for you to join us.`)
}

// Step 2 Add one new guest to the beginning of your array.
let newGuestAtBeginning: string = 'Fazal Azeem'
guestList.unshift(newGuestAtBeginning)
// console.log(guestList)

// Step 3 Add one new guest to the middle of your array.
let newGuestInMiddle: string = 'Shakir Ali'
let middleIndex: number = Math.floor(guestList.length/2)
guestList.splice(middleIndex, 0, newGuestInMiddle)
// console.log(guestList)

// Step 4 Use append() to add one new guest to the end of your list.
let newGuestAtEnd: string = 'Bilal Ahmed'
guestList.push(newGuestAtEnd)
// console.log(guestList)

// Step 5 Print a new set of invitation messages, one for each person in your list.
console.log('NEW SET OF INVITATION MESSAGES:')
for (let guest of guestList) {
    console.log(`Dear, ${guest}, You are invited to dinner and we’d love for you to join us.`)
}
