// 217. Contains Duplicate
// Easy
// 9.8K
// 1.2K
// Companies
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

let containsDuplicate = (n) => {
    const dupe = new Set();

    for (let i = 0; i < n.length; i++) {
        if (dupe.has(n[i])) {
            return true;
        }
        dupe.add(n[i]);
    }

    // n.forEach((el) => {
    //     if (dupe.has(el)) {
    //         return true;
    //     }
    //     dupe.add(el);
    // });
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); //true
console.log(containsDuplicate([1, 2, 3, 4])); //false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true
