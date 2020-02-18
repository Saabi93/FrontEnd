//Vraag username
alert("Hello");
let name = prompt('Welkom! Wat is je naam?');

//Begroeting
alert('Hey ${name}');

//Voer nummer in
let number = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...")

//Random nummer genereren
const randomNumber = Math.floor(Math.random() * 26);

if (number === randomNumber) { spel is gewonnen } 
else { niet goed geraden  }


/*
function concatenate(name, number) {
    var let;
    let = name + number;
    return let;
 }
 function DisplayFunction() {
    var result;
    result = concatenate(name, number);
    document.write (result );
 }

*/

/*
for (i = 0; i < colorArray.length; i++) {
    
    console.log (colorArray[i]);
}
*/

/*
Bij Winc Academy hanteren we de *function expression* `const myFunction = function(){ }` als "best practice", omdat het de meest moderne en gebruikte manier is.  

Echter, ga je in veel tutorials nog een *function declaration* `function myFunction(){}`  tegenkomen. Beide "mogen" en beide werken. In deze tutorial wordt je stap voor stap uitgelegd wat het verschil is tussen de 2, zodat je zelf een beslissing kunt maken. 

Vuistregel: gebruik een *function expression*, tenzij je een goede reden hebt om een *function declaration* te gebruiken.
*/

//Function declaration

console.log(doSomething);
doSomething();

function doSomething() {
    console.log("Declare Something")
}
//Function Expression

console.log(something);
    console.log("Express Something");

let something = function() {
    console.log("Express Something");
};
/*
**Het meest belangrijke verschil in het kort:**

- When using **function declarations**, the function definition is ***hoisted***, thus allowing the function to be used before it is defined.
- **Function expressions** are ***not*** ***hoisted***, and therefore cannot be used before they are defined.

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
*/