// 3. Longest Substring Without Repeating Characters
// Medium
// 36K
// 1.6K
// Companies
// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

let lengthOfLongestSubstring = (s) => {
    let maxLength = 0;
    let left = 0;
    let right = 0;
    let chars = new Set();

    while (right < s.length) {
        if (!chars.has(s.charAt(right))) {
            chars.add(s.charAt(right));
            right++;
            maxLength = Math.max(maxLength, chars.size);
        } else {
            chars.delete(s.charAt(left));
            left++;
        }
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("pwwkew")); //3
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("abcabcbb")); //3
