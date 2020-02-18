 //.filter Method
const items = [
    { name: 'Bike', price: 100 }
    { name: 'TV', price: 200 }
    { name: 'Album', price: 10 }
    { name: 'Book', price: 5 }
    { name: 'Phone', price: 1000 }
    { name: 'PC', price: 25 }
]

 const filteredItems = items.filter((item) => {
    return item.price <= 100
 })
 console.log(items)
 console.log(fileteredItems)

 //.map Method 
const filteredItems = items.map((item) => {
    return item.name <= 100
 })
 console.log(itemNames)

 //.find Method
const foundItem = items.find((item) => {
    return item.name === 'Book'
 })
 console.log(foundItem)

 //.forEach Method
items.forEach((item) => {
    console.log(item.price)
})

//.some function method
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
}) 
console.log(hasInexpensiveItems)

//.every method
const hasInexpensiveItems = items.every((item) => {
    return item.price <= 1000
}) 
console.log(hasInexpensiveItems)

//.reduce method
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0) 
console.log(total)

//.includes  method
const items = [1, 2, 3, 4, 5]

const includesTwo = items.includes(2) //geeft True, want 2 zit in de Array, met 7 => false, niet in array
console.log(includesTwo)