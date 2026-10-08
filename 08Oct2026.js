// ## JS Homework — Week 1, Day 2

// **Today's 3 functions** (Week 1 = basics: single parameter, arithmetic/strings/simple conditionals):

// **1. Function name:** `squareNumber`
// - **Task:** Return the square of the number passed in.
// - **Parameters:** `num` (number)
// - **Returns:** number
// - **Example:** `squareNumber(5)` → `25`

//MY CODE
function squareNumber(num) {
    let result = num ** 2
    console.log((result));
}
squareNumber(5);

//ANSWER

function squareNumber(num) {
    let result = num ** 2;
    return result;
}
console.log(squareNumber(5));

// **2. Function name:** `shoutText`
// - **Task:** Return the given string in all uppercase with an exclamation point added at the end.
// - **Parameters:** `text` (string)
// - **Returns:** string
// - **Example:** `shoutText("hello")` → `"HELLO!"`

//MY CODE
function shoutText(text) {
    // let text = `${text}!`
    let result = text.toUpperCase() + "!";
    console.log(result);
}
shoutText("maleah");

//ANSWER
function shoutText(text) {
    let result = text.toUpperCase() + "!";
    return result;
}
console.log(shoutText("maleah"));

// **3. Function name:** `isPositive`
// - **Task:** Return `true` if the given number is greater than 0, `false` otherwise.
// - **Parameters:** `num` (number)
// - **Returns:** boolean
// - **Example:** `isPositive(-3)` → `false`

//MY CODE
function isPositive(num) {
    
    if (num > 0) {
        console.log('true');
    }
    else {
        console.log('false');
}}

isPositive(-3);

//ANSWER
function isPositive(num) {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isPositive(-3));
