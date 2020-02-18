function sum(a, b) {
    return a + b
}

// variabele aanmaken
let sum2 = (a, b) => {
    return a + b
}

// everything after the arrow is assumed to be returned
//Aanpassen tot verkort:
let sum2 = (a, b) => a + b

//Ander voorbeeld
function isPositive(number) {
    return number >= 0
}
// Aanpassen tot verkort:
let isPositive2 = number => number >= 0 //1e number = argument

//Voorbeeld 3
function randomNumber() {
    return Math.random
}
//Aanpassen
let randomNumber2 = () => Math.random

//Voorbeeld 4
document.addEventListener('click', function() {
    console.log('Click')
})
//Aanpassen
document.addEventListener('click', () => console.log('Click'))


//Ander voorbeeld
class Person {
    constructor(name) {
        this.name = name
    }
}

printNameArrow() {
    setTimeout(() => {
        console.log('Arrow: ' + this.name)
    }, 100)
}
printNameFunction() {
    setTimeout(() => {
        console.log('Function: ' + this.name)
    }, 100)
}

let person = new Person('Bob')
person.printNameArrow()
person.printNameFinction()
console.log(this.name)