// JS Homework — Week 2, Day 8

// Welcome to Week 2. This week’s functions take two or more parameters and use comparisons and basic loops.

// Question 1
// Function name: sumTwoNumbers
// Task: Return the sum of the two numbers passed in.
// Parameters: a (number), b (number)
// Returns: number
// Example: sumTwoNumbers(3, 4) → 7

function sumTwoNumbers(a, b) {
    return a + b;  
}
 console.log(sumTwoNumbers(3,4));
 console.log(sumTwoNumbers(4, -7));
 console.log(sumTwoNumbers(21, -14));
// Question 2
// Function name: countUpTo
// Task: Return a string of the whole numbers from 1 up to and including the given number, separated by spaces. Use a loop.
// Parameters: max (number)
// Returns: string
// Example: countUpTo(5) → "1 2 3 4 5"

let max = 5; 
function countUpTo(max) {
    let max = 5;
    for (let i = 0; i <= max; i++) {
}} 
console.log(countUpTo(i));

//CORRECT ANSWER
function countUpTo(max) {
    let result = "";
    for (let i = 1; i <= max; i++) {
        result += i + " ";
    }
    return result.trim();
}
console.log(countUpTo(5)); 
console.log(countUpTo(1)); 
console.log(countUpTo(0)):
// //Here is how it works:
// result starts as an empty string.
// The loop runs with i set to 1, 2, 3 and so on up 
// to max. Each time, it adds the number and a space to result.
// After the loop, result is "1 2 3 4 5 ", with an extra space 
// on the end. .trim() removes it, and return hands back the finished string.

// The pattern is to start with an empty value, add to it inside the loop, 
// and return it after the loop. You’ll use it often, 
// for strings now and for arrays later.

// Question 3
// Function name: getLarger
// Task: Return the larger of the two numbers passed in. If they are equal, return either one.
// Parameters: a (number), b (number)
// Returns: number
// Example: getLarger(8, 3) → 8

function getLarger(a, b) {
    let largerNumber = Math.max (a, b);
    return largerNumber
}

console.log(getLarger(20, 9));
console.log(getLarger(0, 9));
console.log(getLarger(-1, -9));
console.log(getLarger(4, 66));
