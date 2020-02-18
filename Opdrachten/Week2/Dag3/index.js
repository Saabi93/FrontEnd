/* zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
  };
  
  ikRockArrowFunctions();
  */

// Aanpassing naar een arrow functie
//Remember: `=>` vervangt het woord `function` en wordt in plaats van vóór de haken `()`, áchter de haken `()` geplaatst.
//Remember: hetgeen waar de arrow naar wijst wordt automatisch gereturned.
/* Als de functie-body te veel is voor 1 regel, dan wijst de arrow dus niet meer direct naar hetgeen je wilt returnen. Ergo: je hebt een return statement nodig. */


const ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!");
  
  ikRockArrowFunctions();
//Opdracht B: schrijf de onderstaande functie om naar een arrow functie op 1 regel. 
/* const fivePlusSeven = function () {
    return 5 + 7
  };
  
  fivePlusSeven();
  */
 const fivePlusSeven = () =>  5 + 7;
  
  fivePlusSeven();

  /* 
  Opdracht C:
  Er zijn er nog meer eigenschappen van een arrow function die je weg kunt laten. Net als gewone functies, hóéft een arrow function geen naam te hebben (anonymous function)
Opdracht: schrijf een zo kort mogelijke arrow function, zonder naam  (je hoeft het dus ook niet in een const te stoppen), die 1 + 2 bij elkaar optelt.  
*/
() => 1 + 2
//Functie heeft geen naam, maar kan wel

//Opdracht D
//Parameter toevoegen
//Schrijf een arrow function, op 1 regel (dus met een impliciete return statement), die de params a en b bijelkaar optelt. Noem de functie myFunction.
const myFunction = (a,b) => a + b

//Opdracht E: Als je slechts 1 parameter hebt, kun je de haakjes zelfs helemaal weglaten. 
//Schrijf een arrow function op 1 regel, die de parameter a behoudt, en altijd a plus 5 returned. Noem de functie addFive. 
const addFive = a => a + 5

//Opdracht F: Schrijf een arrow function met de naam createObject met een implicit return statement (dus op 1 regel) die een simpel object returned: {greeting: "hoi"}
const createObject = () => ({greeting: "hoi"})