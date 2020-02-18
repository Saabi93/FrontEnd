
//While loop
/*let age = 5;

while (age < 10) { //condition
    console.log ("Your age is less than 10")
    age++;
}
document.write("you are now over 10")
*/


//For loop

//Even/Oneven
/*
let i = 0
for (i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even')
    }

}*/

//Multiplication
/*let multiplication = 9
let i = 0
for (i = 0; i <= 10; i++) {
    result = multiplication * i;
        console.log(multiplication + ' * ' + i + ' = ' + result);
    
    }

    for (multiplication = 0; multiplication <= 10; multiplication++) {
        for (i = 0; i <= 10; i++) {
            result = multiplication * i;
                console.log(multiplication + ' * ' + i + ' = ' + result);
        
        }
    }*/

//assignGrade

let i = 60
function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (i; i <= 100; i++) {
console.log('For' + i + ' you got a ' + assignGrade(i));
}