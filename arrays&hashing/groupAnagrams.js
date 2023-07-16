// 49. Group Anagrams
// Medium
// Companies
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

let groupAnagrams = (strs) => {
    const groups = new Map();
    for (const str of strs) {
        const sortedStr = str.split("").sort().join("");
        if (!groups.has(sortedStr)) {
            groups.set(sortedStr, []);
        }
        groups.get(sortedStr).push(str);
    }
    return Array.from(groups.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // Output: [[""]]
console.log(groupAnagrams(["a"])); // Output: [["a]]
