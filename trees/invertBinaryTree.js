// 424. Longest Repeating Character Replacement
// Medium
// 9.1K
// 385
// Companies
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achive this answer too.

let characterReplacement = (s, k) => {
    let max_length = 0;
    let max_count = 0;
    const char_count = new Array(26).fill(0);

    let left = 0;
    for (let right = 0; right < s.length; right++) {
        char_count[s.charCodeAt(right) - "A".charCodeAt(0)]++;
        max_count = Math.max(
            max_count,
            char_count[s.charCodeAt(right) - "A".charCodeAt(0)]
        );

        if (right - left + 1 - max_count > k) {
            char_count[s.charCodeAt(left) - "A".charCodeAt(0)]--;
            left++;
        }

        max_length = Math.max(max_length, right - left + 1);
    }

    return max_length;
};

//  usage
const s = "ABAB";
const k = 2;
console.log(characterReplacement(s, k)); //4
