// 371. Sum of Two Integers

// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = 2, b = 3
// Output: 5
//非常弱质的题，但是不能用加号或者减号

var getSum = function (a, b) {
  // 只要 b 不为 0，就继续迭代
  while (b !== 0) {
    // carry 是进位部分
    let carry = a & b;

    // 无进位的和
    a = a ^ b;

    // 更新进位部分，并左移一位
    b = carry << 1;
  }

  // 返回最终结果
  return a;
};
// 看不懂， 死背吧
