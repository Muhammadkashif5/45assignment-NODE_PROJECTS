let guestList: Array <string> =[
    'Faraz Anwar',
    'Muhammad Faizan',
    'Haseeb Ali Khan'
]

//Print the name of person who can't join us for Dinner.

let guestWhoCantMakeIt: string = 'Muhammad Faizan'
console.log(`${guestWhoCantMakeIt} can't join us for Dinner.`)

//Replace the name of guest.

let NewGuest: string = 'Muhammad Areeb'
let indexOfguestWhocantMAkeIt: number = guestList.indexOf(guestWhoCantMakeIt)
if (indexOfguestWhocantMAkeIt !== -1)
{
    guestList[indexOfguestWhocantMAkeIt] = NewGuest
}

//Print second set of invitation

console.log('Second set of invitation messages:')
guestList.forEach((guest:string) =>
{
    console.log(`Dear ${guest}, We’re having a dinner tonight and we’d love for you to join us.`)
})

export{ guestList }