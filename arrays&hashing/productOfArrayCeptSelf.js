// 238. Product of Array Except Self
// Medium
// 18.9K
// 1K
// Companies
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

let productExceptSelf = (nums) => {
    const n = nums.length;

    // Initialize left and right arrays
    const leftProducts = new Array(n);
    const rightProducts = new Array(n);

    // Initialize product variables
    let leftProduct = 1;
    let rightProduct = 1;

    // Calculate left products
    for (let i = 0; i < n; i++) {
        leftProducts[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Calculate right products
    for (let i = n - 1; i >= 0; i--) {
        rightProducts[i] = rightProduct;
        rightProduct *= nums[i];
    }

    // Calculate the final answer array
    const answer = new Array(n);
    for (let i = 0; i < n; i++) {
        answer[i] = leftProducts[i] * rightProducts[i];
    }

    return answer;
};

console.log(productExceptSelf([1, 2, 3, 4])); //[24,12,8,6]
