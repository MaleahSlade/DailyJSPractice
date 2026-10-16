// JS Homework — Week 2, Day 10

// Question 1
// Function name: averageOfTwo
// Task: Return the average of the two numbers passed in (add them, then divide by 2).
// Parameters: a (number), b (number)
// Returns: number
// Example: averageOfTwo(4, 10) → 7

function averageOfTwo(a, b) {
    let average = (a + b)/2;
    return average;
}

console.log(averageOfTwo(10, 20));
console.log(averageOfTwo(12642, 12**6));
console.log(averageOfTwo(2**6, 3.142)); 

// Question 2
// Function name: repeatText
// Task: Return the given text repeated the given number of times, with nothing between the copies. Use a loop.
// Parameters: text (string), times (number)
// Returns: string
// Example: repeatText("ha", 3) → "hahaha"
function repeatText(text, a) {
    let repeat = text.repeat(a);
    return repeat;
}
console.log(repeatText("Maleah", 8));
console.log(repeatText("Go Liberty! ", 6));
console.log(repeatText("Go New York, Go New York, Go! ", 2));

//ALTERNATIVE ANSWER USING LOOP
function repeatText(text, times) {
    let result = "";
    for (let i = 0; i < times; i++) {
        result += text;
    }
    return result;
}
console.log(repeatText("ha", 3)); // "hahaha"
console.log(repeatText("ha", 0));

// Question 3
// Function name: compareNumbers
// Task: Return "greater" if a is bigger than b, "less" if a is smaller than b, and "equal" if they are the same.
// Parameters: a (number), b (number)
// Returns: string
// Example: compareNumbers(5, 3) → "greater"

function compareNumbers(a, b) {
    if (a > b) {
        return true, "Greater";
    }
    if (a== b) {
        return "Equal";
    }
    else {
        return false, "Lesser";
    }
}

//ALTERNATIVE ANSWER
function compareNumbers(a, b) {
    if (a > b) {
        return "greater";
    } else if (a < b) {
        return "less";
    } else {
        return "equal";
    }
}

console.log(compareNumbers(14, 14));
console.log(compareNumbers(2, 16));
console.log(compareNumbers(16, 2)); 