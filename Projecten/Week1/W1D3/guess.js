//Begroeting met input

    let name = prompt('Welkom! Wat is je naam?', );
//Bericht terug
    if (name!= null) {
    document.getElementById("welcome").innerHTML =
    "Hey " + name;

}


//Nummer invoeren, dmv een prompt en vervolgens op enter
let number = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...")

//Random nummer genereren
let upper = 25;
let randomNumber = getRandomNumber(upper);
let guess;
let attempts = 5;


function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while(guess !== randomNumber) {
  guess = getRandomNumber(upper);
  attempts+=1, max=5;
}

document.write("<p>Het nummer is: " + randomNumber + "</p>");
//document.write("<p>It took the computer " + attempts + " attempts to get it right.</p>");

function testNum(upper) {
    if (upper > 0) {
//Alert correct nummer
//Bericht Dag [naam]
      return alert("Gefeliciteerd je hebt gewonnen"), alert("Dag " + name + ". Tot de volgende keer");
    } else {
//Alert verkeerd nummer
      return alert("Dat is niet correct, wil je het nog eens proberen?");
    }

  }
console.log(testNum(-5));

//Bonus. Maximaal 5 pogingen om te raden. 
    //Na elke poging nieuw berichtmet aantal resterende pogingen
    //Toon bericht indien er geen pogingen meer zijn
//Gebruiker bepaalt zelf de range
    //Gevraagd worden wat het kleinste en grootste nummer is
    //Als gebruiker speel ik nu het spel met de nummer-range die ik heb aangegeven bij de start van het spel. 