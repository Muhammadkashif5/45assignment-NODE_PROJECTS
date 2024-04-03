// Step 1 Store at least five places in the world you’d like to visit in a array.
let placesToVisit: string [] = ['Masjid ul Haram', 'Istanbul', 'Gaza', 'Palestine', 'Skardu', 'Gilgit' ]

// Step 2 Print your array in its original order.
console.log('Original Order:')
console.log(placesToVisit)

// Step 3 Print your array in alphabetical order without modifying the actual list.
console.log('\nAlphabetical order without modifying the actual list:')
console.log([...placesToVisit].sort())

// Step 4 Show that your array is still in its original order by printing it.
console.log('\nArray is still in its original order:')
console.log(placesToVisit)

// Step 5 Print your array in reverse alphabetical order without changing the order of the original list.
console.log('\nReverse alphabetical order without changing the order of the original list:')
console.log([...placesToVisit].sort().reverse())

// Step 6 Show that your array is still in its original order by printing it again.
console.log('\nArray is still in its original order:')
console.log(placesToVisit)

// Step 7 Reverse the order of your list. Print the array to show that its order has changed.
console.log('\nReverse order:')
placesToVisit.reverse()
console.log(placesToVisit)

// Step 8 Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('\nBack to its order:')
placesToVisit.reverse()
console.log(placesToVisit)

// Step 9 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('\nChange to alphabetical order:')
placesToVisit.sort()
console.log(placesToVisit)

// Step 10 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('\nChange to reverse alphabetical order:')
placesToVisit.sort().reverse()
console.log(placesToVisit)