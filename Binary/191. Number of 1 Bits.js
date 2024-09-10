// 191. Number of 1 Bits
// Write a function that takes the binary representation of a positive integer and returns the number of
// set bits
//  it has (also known as the Hamming weight).

// Example 1:

// Input: n = 11

// Output: 3

// Explanation:

// The input binary string 1011 has a total of three set bits.

// Example 2:

// Input: n = 128

// Output: 1

// Explanation:

// The input binary string 10000000 has a total of one set bit.

// Example 3:

// Input: n = 2147483645

// Output: 30

// Explanation:

// The input binary string 1111111111111111111111111111101 has a total of thirty set bits.
var hammingWeight = function (n) {
  let count = 0;
  while (n > 0) {
    count += n % 2; // 通过取模 2 判断当前位是否为 1
    n = Math.floor(n / 2); // 用整数除以 2 来去掉最低位
  }
  return count;
};

//更简单的写法
var hammingWeight2 = function (n) {
  return n
    .toString(2)
    .split("")
    .filter((x) => (x = 1)).length;
};
console.log(hammingWeight2(15))
