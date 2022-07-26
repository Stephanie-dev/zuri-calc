let opr = prompt("Operator: ")
let num1 = parseFloat(prompt("Number 1: "));
let num2 = parseFloat(prompt("Number 2: "));

if(opr == "+") {
    console.log (num1 + num2);
} else if(opr == "-") {
    console.log (num1 - num2);
} else if(opr == "/") {
    console.log (num1 / num2);
} else if(opr == "*") {
    console.log (num1 * num2);
}