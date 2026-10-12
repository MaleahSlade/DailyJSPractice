// JS Homework — Week 1, Day 5

// Today’s 4 functions (Week 1 = basics: single parameter, arithmetic/strings/simple conditionals). You asked for extra boolean practice, so questions 3 and 4 both return true or false.

// 1. Function name: incrementNumber

// Task: Return the number passed in plus one.
// Parameters: num (number)
// Returns: number
// Example: incrementNumber(9) → 10

function incrementNumber(number) {
    return number + 1;
}
console.log(incrementNumber(6));

// 2. Function name: wrapInBrackets

// Task: Return the given string wrapped in square brackets. Make all the text capitalized. 
// Parameters: text (string)
// Returns: string
// Example: wrapInBrackets("cat") → "[CAT]"

function wrapInBrackets(text) {
     return `[${text.toUpperCase()}]`;
} 
console.log(wrapInBrackets("we are the champions"));
 
// 3. Function name: isSingleDigit

// Task: Return true if the number is between -9 and 9 (inclusive), false otherwise.
// Parameters: num (number)
// Returns: boolean
// Example: isSingleDigit(12) → false

function isSingleDigit(num) {
    if (- 9 < num) {
        return true; 
    } if (9 > num) {
        return true;
    }
    else {
        return false;
    }
}

//ANSWER
function isSingleDigit(num) {
    if (num >= -9 && num <= 9) {
        return true;
    } else {
        return false;
    }
}
console.log(isSingleDigit(7));
console.log(isSingleDigit(-9));
console.log(isSingleDigit(12));
// 4. Function name: canVote

// Task: Return true if the given age is 18 or older, false otherwise.
// Parameters: age (number)
// Returns: boolean
// Example: canVote(18) → true

function canVote(age) {
    if (18 < age) {
        return true; 
    } if (18 > age) {
        return true;
    }
    else {
        return false;
    }
}

//ANSWER
function canVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}