/*
const cheeseSandwich = function() {
    console.log('Put butter on');
    console.log('Put cheese on');
    console.log('Enjoy');
};
    
cheeseSandwich();
*/
/* 
function cheeseSandwich(filling) { //filling = Parameter
    Get one slice of bread;
    Add filling;
    Put a slice of bread on top;
    }
    
    cheeseSandwich(ham) // Arguments
    */

/*let topping = ['ham']; 
const makeSandwich = function(topping) {
    console.log('Put butter on');
    console.log('Put ',topping,' on');
    console.log('Enjoy');
    console.log("There you go, a sandwich with " + topping);
};


makeSandwich(topping);
*/
//Deel C
const calculateDiscountedPrice = function(totalAmount, discount) {
    return Math.round(totalAmount - discount);
}
console.log(calculateDiscountedPrice(20, 1));


//Deel D
const calculateDiscountedPriceTwo = function(totalAmount, discount) {
    if (totalAmount > 25){
        return Math.round(totalAmount - discount);
    }   else {
        return totalAmount;
    } 
    
    
}
console.log(calculateDiscountedPrice(30, 1));
console.log(calculateDiscountedPrice(10, 1.50));
