// 347. Top K Frequent Elements
// Medium
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

let topKFrequent = (nums, k) => {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Step 2: Sort the map based on frequency in descending order
    const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

    // Step 4: Extract the top k frequent elements
    const result = [];
    let count = 0;
    for (const [num, frequency] of sortedMap) {
        result.push(num);
        count++;
        if (count === k) {
            break;
        }
    }

    return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
