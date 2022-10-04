let num1 = prompt('Enter first number:');
const newNum1 = parseInt(num1);
let num2 = prompt('Enter second number:');
const newNum2 = parseInt(num2);

const sum = newNum1 + newNum2;
const subtraction = newNum1 - newNum2;
const multiplication = newNum1 * newNum2;
const division = newNum1 / newNum2;

alert(newNum1+"+"+ newNum2 +"=" + sum);
alert(newNum1+"-"+ newNum2 +"=" + subtraction);
alert(newNum1+"*"+ newNum2 +"=" + multiplication);
alert(newNum1+"/"+ newNum2 +"=" + division);
