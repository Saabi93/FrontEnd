const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
  for (let person of array) {
    //console.log("Overzicht personen:", person);
    //console.log("Persoonsnamen:", person.name);
    //console.log("Beroepen:", person.profession);
    //console.log("Verschillende Leeftijden:", 2020 - person.age);
    //console.log("Namen en beroepen: ", person.name, " met als beroep ", person.profession);
    if (person.age > 50) {
        console.log("De seniorclub:", person.name);
  }
  }
