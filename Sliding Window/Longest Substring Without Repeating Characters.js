// Longest Substring Without Repeating Characters
// Solved 
// Given a string s, find the length of the longest substring without duplicate characters.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: s = "zxyzxyz"

// Output: 3
// Explanation: The string "xyz" is the longest without duplicate characters.

// Example 2:

// Input: s = "xxxx"

// Output: 1
// Constraints:

// 0 <= s.length <= 1000
// s may consist of printable ASCII characters.


class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0
        let sSet = new Set()
        let left = 0
        for (let right = 0; right < s.length; right++) {
            while (sSet.has(s[right])) {
                sSet.delete(s[left])
                left++
            }

            sSet.add(s[right])
            longest = Math.max(right - left + 1, longest)

        } return longest
    }
}
