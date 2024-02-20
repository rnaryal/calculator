var firstNum = console.log (window.prompt("Enter a first number"));
var secondNum = console.log(window.prompt("Enter a second number"));

// parseInt test
a = parseInt(firstNum);
b = parseInt(secondNum);

totalAdd = a + b;
window.alert(totalAdd); 
// Not success in converting user assigned inf to number :(


// Checking if statement for a while, not a part of calculater until now
if (firstNum > 50) {
    window.alert ("Your first number is greater than 50");
} else {
    window.alert("Your first number is equal or smaller than 50 because computer assumes the entered number as string");
}

// checking else if statement, still not part of final app
testNum = 25
if (testNum > 20) {
    window.alert("Test number is greater than 20");
} else if (testNum == 20) {
    window.alert("Test number is equal to 20");
} else window.alert("Test number is smaller than 20")



// Some extra maths as console.log doesn't keep record for future
x = 3.14159265
y = 5
z = 7

window.alert(Math.max(x, y, z));
console.log(Math.round(x));
console.log(Math.floor(x)); 
console.log(Math.ceil(x));
console.log(Math.pow(x,2));
console.log(Math.sqrt(x));
console.log(Math.abs(x));
console.log(Math.max(x, y, z));
console.log(Math.min(x, y, z));

