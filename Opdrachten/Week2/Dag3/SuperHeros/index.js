//const superHeroes = [
    const heroes = [

    {
      "name": "Batman",
      "publisher": "DC Comics",
      "alter_ego": "Bruce Wayne",
      "first_appearance": "Detective Comics #27",
      "weight": "210"
    },
    {
      "name": "Superman",
      "publisher": "DC Comics",
      "alter_ego": "Kal-El",
      "first_appearance": "Action Comics #1",
      "weight": "220"
    },
    {
      "name": "Flash",
      "publisher": "DC Comics",
      "alter_ego": "Jay Garrick",
      "first_appearance": "Flash Comics #1",
      "weight": "195"
    },
    {
      "name": "Green Lantern",
      "publisher": "DC Comics",
      "alter_ego": "Alan Scott",
      "first_appearance": "All-American Comics #16",
      "weight": "186"
    },
    {
      "name": "Green Arrow",
      "publisher": "DC Comics",
      "alter_ego": "Oliver Queen",
      "first_appearance": "All-American Comics #16",
      "weight": "195"
    },
    {
      "name": "Wonder Woman",
      "publisher": "DC Comics",
      "alter_ego": "Princess Diana",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "165"
    },
    {
      "name": "Blue Beetle",
      "publisher": "DC Comics",
      "alter_ego": "Dan Garret",
      "first_appearance": "Mystery Men Comics #1",
      "weight": "145"
  },
  {
      "name": "Spider Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Peter Parker",
      "first_appearance": "Amazing Fantasy #15",
      "weight": "167"
  },
  {
      "name": "Captain America",
      "publisher": "Marvel Comics",
      "alter_ego": "Steve Rogers",
      "first_appearance": "Captain America Comics #1",
      "weight": "220"
  },
  {
      "name": "Iron Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Tony Stark",
      "first_appearance": "Tales of Suspense #39",
      "weight": "250"
  },
  {
      "name": "Thor",
      "publisher": "Marvel Comics",
      "alter_ego": "Thor Odinson",
      "first_appearance": "Journey into Myster #83",
      "weight": "200"
  },
  {
      "name": "Hulk",
      "publisher": "Marvel Comics",
      "alter_ego": "Bruce Banner",
      "first_appearance": "The Incredible Hulk #1",
      "weight": "1400"
  },
  {
      "name": "Wolverine",
      "publisher": "Marvel Comics",
      "alter_ego": "James Howlett",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "200"
  },
  {
      "name": "Daredevil",
      "publisher": "Marvel Comics",
      "alter_ego": "Matthew Michael Murdock",
      "first_appearance": "Daredevil #1",
      "weight": "200"
  },
  {
      "name": "Silver Surfer",
      "publisher": "Marvel Comics",
      "alter_ego": "Norrin Radd",
      "first_appearance": "The Fantastic Four #48",
      "weight": "unknown"
    }
  ]
/* -----------------------------------------------
  //2.1
  //const heroesNames = (heroes) => heroes.map(element => element.name);
  //console.log(heroesNames(superHeroes))
  
  
const heroesWithWeights = heroes.map(hero => {
    if(hero.weight === "unknown") {
        console.log(hero);
    }
    else {
        const newHeroWithWeight = parseInt(hero.weight);
            console.log(newHeroWeight);
        hero.weight = newHeroWeight;
        return hero;
        //console.log("hero with weight", hero);
    }
    
})//meervoud + enkelvoud

//console.log(herosWithWeights)

*/
//------------------------------------------------ 
/*
  //2.2
  //const lightHeroes = superHeroes.filter(element => element.weight < 190);
  //console.log("lichte superhelden zijn:", lightHeroes);

const filteredHeroes = heroes.filter(hero => {
    return hero.publisher  === "Marvel Comics") {
        return true
    } else {
        return false
    })


*/
//------------------------------------------------
  //2.3 
 /* filteren heroes
  const lightHeroes = superHeroes.filter(element => element.weight = 200)
  //console.log("lichte superhelden:", lightHeroes);
    const heroesNames = (heroes) => heroes.map(element => element.name);
  console.log(heroesNames(superHeroes)) 
  */
 // console.log(lightHeroes(superHeroes))

  //let integer = parseInt(lightHeroes, 10)

  //lightHeroes.reduce(function(value) {
//return value = "weight";
 // })
 // console.log(lightHeroes(superHeroes))

//Reduce ---------------------------



  
//------------------------------------------------

//2.8 Bonus
console.log(heroes);
const allHeroes = heroes.map(hero) => {
    const weight = hero.weight !== "unknown" ? parseInt (hero.weight) :0;
    hero.weight = weight;
    return hero;
};