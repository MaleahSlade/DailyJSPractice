// JS Homework — Week 1, Day 4

// Today’s 3 functions (Week 1 = basics: single parameter, arithmetic/strings/simple conditionals):

// 1. Function name: cubeNumber

// Task: Return the cube of the number passed in.
// Parameters: num (number)
// Returns: number
// Example: cubeNumber(3) → 27

function cubeNumber(number) {
    let num = number * number * number; 
    return num
}
console.log(cubeNumber(3)); 
console.log(cubeNumber(9));
console.log(cubeNumber(-5));
//CORRECT SOLUTION!!

// 2. Function name: farewellMessage

// Task: Return a farewell string that includes the given name.
// Parameters: name (string)
// Returns: string
// Example: farewellMessage("Sam") → "Goodbye, Sam!"

function farewellMessage(name) {
    let message = `Fare thee well, ${name}! WE LOVE THOU!!`
    return message
}
console.log(farewellMessage("Maleah")); 
//CORRECT SOLUTION!!

// 3. Function name: isZero

// Task: Return true if the given number equals 0, false otherwise.
// Parameters: num (number)
// Returns: boolean
// Example: isZero(0) → true

function isZero(number) {
    let xero = 0;

   if (number = xero) {
    console.log(true);}

    else { false;
}}

console.log(isZero(0));

//EDITED CODE
function isZero(number) {
    if (number === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isZero(0));  // true
console.log(isZero(5));  // false
console.log(isZero(-2)); // false