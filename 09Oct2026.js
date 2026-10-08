// JS Homework — Week 1, Day 3

// Today's 3 functions (Week 1 = basics: single parameter, arithmetic/strings/simple conditionals):

// 1. Function name: halveNumber

// Task: Return half the value of the number passed in.
// Parameters: num (number)
// Returns: number
// Example: halveNumber(10) → 5

function halveNumber(number) {
    let num = (number/2);
    return num;
}

console.log(halveNumber(10));

// 2. Function name: repeatWord

// Task: Return the given word repeated twice in a row, separated by a space.
// Parameters: word (string)
// Returns: string
// Example: repeatWord("go") → "go go"

function repeatWord(text) {
    let doubleWord = (text + " " + text);
    return doubleWord;
}

console.log(repeatWord("hot dog"));
// 3. Function name: isNegative

// Task: Return true if the given number is less than 0, false otherwise.
// Parameters: num (number)
// Returns: boolean
// Example: isNegative(5) → false

function isNegative(number) {
    let num = number 

    if (number > 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
    return num; 
}

console.log(isNegative(-6));

//SUGGESTED EDITS 
function isNegative(num) {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isNegative(-6)); // true
console.log(isNegative(5));  // false
console.log(isNegative(0));  // false (0 is not negative)

//NOTE: Work on using booleans correctly!