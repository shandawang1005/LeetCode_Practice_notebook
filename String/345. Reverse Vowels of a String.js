// 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

var reverseVowels = function (s) {
  const vowels = "aeiouAEIOU";
  let i = 0;
  let j = s.length - 1;
  let ca = s.split("");

  while (i < j) {
    if (!vowels.includes(ca[i])) {
      i++;
    } else if (!vowels.includes(ca[j])) {
      j--;
    } else {
      [ca[i], ca[j]] = [ca[j], ca[i]];
      i++;
      j--;
    }
  }
  return ca.join("");
};
