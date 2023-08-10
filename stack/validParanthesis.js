// 20. Valid Parentheses
// Easy
// 21.3K
// 1.4K
// Companies
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(s) {
    const stack = [];
    const map = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    for (let char of s) {
        if (char in map) {
            const topElement = stack.length > 0 ? stack.pop() : "#";
            if (map[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

const inputString = "([{}])";
const isValidString = isValid(inputString);
console.log(isValidString);
