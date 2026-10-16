// JS Homework — Week 2, Day 9
// Question 1
// Function name: calculateArea
// Task: Return the area of a rectangle (width times height).
// Parameters: width (number), height (number)
// Returns: number
// Example: calculateArea(5, 3) → 15

//MY ANSWER--CORRECT
function calculateArea(a, b) {
    const area = a * b;
    return area 
}
console.log(calculateArea(12,6));
console.log(calculateArea(6,6));
console.log(calculateArea(1,67));
// Question 2
// Function name: sumUpTo
// Task: Return the sum of all whole numbers from 1 up to and including the given number. Use a loop.
// Parameters: max (number)
// Returns: number
// Example: sumUpTo(4) → 10 (because 1 + 2 + 3 + 4 = 10)

//MY ANSWER -- INCORRECT 
function sumUpTo(max) {
    let result = " ";
      for (let i = 1; i <= max; i++) {
        sum = i += " ";
        return sum  
    }
}

//CORRECT ANSWER
function sumUpTo(max) {
    let sum = 0;
    for (let i = 1; i <= max; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumUpTo(4));  // 10
console.log(sumUpTo(1));  // 1
console.log(sumUpTo(26)); // 351

// Question 3
// Function name: isBetween
// Task: Return true if the number is greater than or equal to min and less than or equal to max, and false otherwise.
// Parameters: num (number), min (number), max (number)
// Returns: boolean
// Example: isBetween(7, 1, 10) → true

//MY ANSWER -- INCORRECT ANSWER 
function isBetween(min, max) {
    if (min >= " " && max <= " " ) {
        return true;
    } else {
        return false;
    }
}
console.log(isBetween(2, 7)); 

//CORRECT ANSWER 
function isBetween(num, min, max) {
    return num >= min && num <= max;
}
console.log(isBetween(7, 1, 10));  // true
console.log(isBetween(1, 1, 10));  // true
console.log(isBetween(10, 1, 10)); // true
console.log(isBetween(11, 1, 10)); // false