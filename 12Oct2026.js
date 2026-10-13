// JS Homework — Week 1, Day 6

// Today’s 3 functions (Week 1 = basics: single parameter, arithmetic/strings/simple conditionals):

// 1. Function name: subtractFive

// Task: Return the number passed in minus five.
// Parameters: num (number)
// Returns: number
// Example: subtractFive(8) → 3

function subtractFive(num) {
    return num - 5; 
}

console.log("Subtract Five: " + subtractFive(8));
console.log("Subtract Five: " + subtractFive(5));
console.log("Subtract Five: " + subtractFive(105));
console.log("Subtract Five: " + subtractFive(2)); 

// 2. Function name: firstLetter

// Task: Return the first letter of the given string.
// Parameters: text (string)
// Returns: string
// Example: firstLetter("Banana") → "B"

function firstLetter(text) {
    return text.charAt(0);
}

console.log("Return First Letter: " + firstLetter("New"));
console.log("Return First Letter: " + firstLetter("York"));
console.log("Return First Letter: " + firstLetter("City"));

// 3. Function name: isLongWord

// Task: Return true if the given string has more than 5 characters, false otherwise.
// Parameters: word (string)
// Returns: boolean
// Example: isLongWord("cat") → false

function isLongWord(text) {
    if (text.length >= 5) {
        return true;
    } else {
        return false;
    }
}
 console.log("Is longer than 5 characters: " + isLongWord("Maleah"));
 console.log("Is longer than 5 characters: " + isLongWord("cat"));
 console.log("Is longer than 5 characters: " + isLongWord("Titus"))

// JS Homework — Week 1, Day 7

// Question 1

// Function name: tripleNumber
// Task: Return the number passed in, multiplied by 3.
// Parameters: num (number)
// Returns: number
// Example: tripleNumber(4) → 12

function tripleNumber(num) {
    return num * 3;
}
console.log(tripleNumber(4));
console.log(tripleNumber(-9));
console.log(tripleNumber(16)); 
// Question 2

// Function name: addQuestionMark
// Task: Return the given text with a question mark added at the end. Also make the first letter capitalized.
// Parameters: text (string)
// Returns: string
// Example: addQuestionMark("how are you") → "How are you?"
 function addQuestionMark(text) {
    return (text.charAt(0).toUpperCase() + text.slice(1)) + "?";
 }
 console.log(addQuestionMark('how old are you'));
 console.log(addQuestionMark('do you ever think of pot bellied pigs'));
 console.log(addQuestionMark('do you even code bro'));

// Question 3

// Function name: isTeen
// Task: Return true if the age is from 13 to 19 (including both 13 and 19), and false otherwise.
// Parameters: age (number)
// Returns: boolean
// Example: isTeen(15) → true

function isTeen (age) {
    if (age >= 13 && age <= 19) {
        return true;
    } else {
        return false;
    }
}

console.log(isTeen(12));
console.log(isTeen(13));
console.log(isTeen(19));
console.log(isTeen(20));
// Hints for today:

// Question 3 needs && (both conditions must be true), like isSingleDigit from Day 5.
// Test the edges: 12, 13, 19 and 20.



