// 300. Longest Increasing Subsequence
// Given an integer array nums, return the length of the longest strictly increasing
// subsequence
// .

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
var lengthOfLIS = function (nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }
  const n = nums.length;
  const dp = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};
// 假设我们有数组 nums = [10, 9, 2, 5, 3, 7, 101, 18]，我们来逐步走一下这个算法：

// 初始化 dp 数组为 [1, 1, 1, 1, 1, 1, 1, 1]，每个元素的递增子序列最短为 1（它自己）。

// 对于 i = 0（nums[0] = 10），由于没有前面的元素，dp[0] 依旧为 1。

// 对于 i = 1（nums[1] = 9），没有比 9 小的元素，所以 dp[1] 依然是 1。

// 对于 i = 2（nums[2] = 2），同样，dp[2] 保持为 1，因为 2 之前没有比它小的元素。

// 对于 i = 3（nums[3] = 5），我们找到前面有比 5 小的元素 2，所以可以将 5 加入以 2 结尾的递增子序列中：

// dp[3] = dp[2] + 1 = 2，现在 dp[3] 的值为 2。
// 对于 i = 4（nums[4] = 3），我们可以将 3 加入以 2 结尾的递增子序列中：

// dp[4] = dp[2] + 1 = 2，更新 dp[4] 为 2。
// 对于 i = 5（nums[5] = 7），可以加入以 5 结尾的子序列中，因为 7 > 5，也可以加入以 3 结尾的子序列中：

// 先计算 dp[5] = dp[3] + 1 = 3（基于 5 的递增子序列），最终 dp[5] = 3。
// 对于 i = 6（nums[6] = 101），它比前面的所有元素都大，所以它可以接到任意递增子序列后面，最长的是接在 7 后面：

// dp[6] = dp[5] + 1 = 4，更新 dp[6] 为 4。
// 对于 i = 7（nums[7] = 18），它比前面所有的元素大，但最优的方案是接在 7 后面：

// dp[7] = dp[5] + 1 = 4，更新 dp[7] 为 4。
// 最终，dp 数组为 [1, 1, 1, 2, 2, 3, 4, 4]，最长递增子序列的长度为 4。
