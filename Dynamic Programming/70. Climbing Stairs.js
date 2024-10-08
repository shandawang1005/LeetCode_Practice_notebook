// 70. Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
//这个问题其实就是fabanacci sequence 记下面那种方法吧，用object快一些

var climbStairs = function (n) {
  let prv1 = 1;
  let prv2 = 1;

  for (let i = 0; i < n; i++) {
    let tmp = prv1;
    prv1 = prv1 + prv2;
    prv2 = tmp;
  }

  return prv2;
};



var obj = { 1: 1, 2: 2 }
var climbStairs = function (n) {
    if (!obj[n]) {
        let result = climbStairs(n - 1) + climbStairs(n - 2);
        obj[n] = result
        return result
    }
    else {
        return obj[n]
    }
};