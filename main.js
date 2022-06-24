function calculateFigures() {
let result = 0;
let valueOne= 0;
let valueTwo = 0;
let mathSign = "+";

valueOne = prompt("Enter Number")

mathSign = prompt("Enter math operator's sign")

valueTwo = prompt("Enter another number")

if(!parseInt(valueOne)|| !parseInt(valueTwo)) {
alert("Only figures can be calculated. Please try again.")
return;
}

if(mathSign === "+") {
result = parseInt(valueOne) + parseInt(valueTwo)
} else if(mathSign === "-") {
result = parseInt(valueOne) - parseInt(valueTwo)
} else if(mathSign === "/") {
result = parseInt(valueOne) / parseInt(valueTwo)
} else if (mathSign === "*") {
result = parseInt(valueOne) * parseInt(valueTwo)
} else {
alert('enter a math operator sign among the following;  + - / *')
return;
}

document.getElementById("demo").innerHTML = result;
}