const age = 18;
const isFemale = true;
const driverStatus = "Bob";
const b = 25;
const Sarah = true;
const Bram = true;
const besteding = 26;

if (age >= 18) {
  console.log("Kom binnen");
} else {
  console.log("Tot over een paar jaar");
}

if (isFemale) {
  console.log("Kom binnen");
} else {
  console.log("Wegwezen jij");
}

if ("Bob") {
  console.log("Rij veilig");
} else {
  console.log("Bel een taxi");
}

if (age >= 18 && b <= 25) {
  console.log("Jij valt in de prijzen, je krijgt 50%");
} else {
  console.log("De categorie senioren valt buiten de prijzen, helaas");
}

if (Sarah || Bram) {
  console.log("Biertje!!");
} else {
  console.log("Helaas pindakaas");
}

if (besteding >= 100) {
  console.log("Feestje");
} else if (besteding > 50) {
  console.log("gratis portie nachos");
} else if (besteding > 25) {
  console.log("Kom op met die Bballen!!");
} else {
  console.log("Niet zo krenterig de volgende keer");
}
