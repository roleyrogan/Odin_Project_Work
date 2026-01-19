function add8(num){
    return num + 7;
}

function multiply(num1, num2){
    return num1 * num2;
}

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
}
function lastLetter(string){
    return string.charAt(string.length - 1);
}

console.log(add8(8));
console.log(multiply(2, 3));
console.log(capitalize("ABCD"));
console.log(lastLetter("abcd"));