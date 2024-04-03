interface item {
    name:string
    price:number
}

const book1: item = {
    name: 'Data & Computer Communication',
    price: 2000
}
const book2: item = {
    name: 'Programming Fundamentals',
    price: 3000
}
console.log(`Book Name: ${book1.name}, Price: ${book1.price}`)
console.log(`Book Name: ${book2.name}, Price: ${book2.price}`)