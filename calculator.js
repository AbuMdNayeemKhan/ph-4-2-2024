//calculator
function add(num1, num2){
    return num1 + num2;
}
function sub(num1, num2){
    return num1 - num2;
}
function mul(num1, num2){
    return num1 * num2;
}
function div(num1, num2){
    return num1 / num2;
}
function calculator(num1, num2, cal){
    if (cal === '+') {
         console.log(add(num1, num2));
    } else if (cal === '-'){
        console.log(sub(num1, num2));
    } else if (cal === '-'){
        console.log(mul(num1, num2));
    } else if (cal === '*'){
        console.log(div(num1, num2));
    } else {
        console("No aratematick oparator found.");
    };
};
calculator(2, 2, '+');