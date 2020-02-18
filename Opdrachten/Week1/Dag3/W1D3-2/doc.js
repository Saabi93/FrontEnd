/*
makeSandwichWith _____
Get one slice of bread
Add _____
Put a slice of bread on top
*/

function makeSandwichWith(filling) { //filling = Parameter
Get one slice of bread;
Add filling;
Put a slice of bread on top;
}

makeSandwichWith(ham) // ham = Argument. This line will run all the steps in the function

console.log('My Todos', todos)

function sayHiTo(person) {
    console.log('hi', person)
}

sayHiTo('Gordon') //person = 'gordon'

let myVariable = myFunction()

function test(){
    return true;
  };
  test();
  // true

function test(){
    return true;
  };
  test();
  // true

  function test(){
    return true;
    return false;
  };
  test();
  // true. The code on line three: return false; is never executed.

  let double = function(num) {
    return num * 2;
 }

 let countTo = function(num){
    if(typeof num != 'number') return false;
    for(var i = 1; i <= num; i++){
      console.log(i);
    }
  }
  // Ending a Function

  function stopAtThree(){
    for(var i = 0; i <= 10; i++){
      if(i === 3) return i;
    }
   }
   //Interrupting a Loop/Function

   function name(n) {
    return function(a) {
      return `${n} likes ${a}`;
    };
  }
  //return a function from within a function