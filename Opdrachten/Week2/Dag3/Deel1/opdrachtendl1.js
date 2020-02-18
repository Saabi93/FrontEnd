//A
// Mijn array
/*let arrayOfWords = ["Hi", "Hello", "Bonjour"];
  
  // Adding new value to the array
  arrayOfWords.push("cool");
  
  console.log(arrayOfWords);
  */


 /* const addTheWordCool = function(array) {
    array.push("cool");
    return array;
  };
  console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"])); 
*/
//B
//const totalNumber = [1, 2, 3, 4, 5, 6, 8, 9, 12];
//console.log(totalNumber.length);

/*
const amountOfElementsInArray = function(array) {
    return array.length;
  };
  console.log(amountOfElementsInArray(["appels", "peren", "citroenen"])); 
  // resultaat: 3
*/

//C
/*const selectBelgiumFromBenelux = function(array) {
return array[0];
};
*/


//D
/* const lastElementInArray2 = function(array) {
    return array[array.lenght - 1];
  };
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"

const lastElementInArray = function(array) {
    return array.pop();
  };
  */

  //E
/*  const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

  const impeachTrumpSlice = function(array) {
    const newArray = array.slice(1, 4);
    
    console.log("Nieuwe array:", newArray, "De onaangetaste array", array);
    return newArray;
  }
  const impeachTrumpSplice = function(array) {
    const removedElement = array.splice(0, 1);
  
    console.log("removed element:",removedElement,"De mutated array, Trump is missing:",array);
    return array;
  }
  
  console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
  console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]
*/

//F
/* const stringsTogether = function (array) {
    return array.join (" ");
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"
*/

//G
const combineArrays = function (arrayOne, arrayTwo) {
    return arrayOne.concat(arrayTwo);
}
console.log(combineArrays([1,2,3], [4,5,6]))
// result should be [1,2,3,4,5,6] 