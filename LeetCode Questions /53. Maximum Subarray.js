// 53. Maximum Subarray
// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
//题目的关键在于什么是subarray
//subarray指的是非空，连续的array， 比如 array是[1,2,3,4]，那么subarray 可以是很多种： [1],[1,2],[2,3],[2,3,4]这些都属于，那么最大的只会是[1,2,3,4]
var maxSubArray = function(nums) {
    let curr_sum = nums[0]; // 初始化当前子数组的和为数组的第一个元素
    let max_sum = nums[0];  // 初始化最大子数组的和为数组的第一个元素
  
    for (let i = 1; i < nums.length; i++) {  // 从数组的第二个元素开始遍历
      curr_sum = Math.max(nums[i], curr_sum + nums[i]);
      max_sum = Math.max(curr_sum, max_sum);
    }
  
    return max_sum;  // 返回最大子数组的和
  }

  //这题的思路在于在28行测试当前数字加上nums[i]后会不会变大（或者说对于max有没有帮助），如果变大，那么继续加，否则抛弃
  //然后再maxsum的时候只需要比较当前数字是不是比maxsum大，如果是就更新max如果不是就抛弃。
 //最关键的一点，当4，-1，2，1时并不是说直接抛弃-1， 而是拿4 + -1  与-1比较（curr 和max都是4），虽然max不会变化，然后currsum会变化成3， 而不是4

//   理解 Kadane's Algorithm 是如何工作的。你提到在处理 4, -1, 2, 1 的时候，-1 是否会被抛弃。这是一个值得探讨的问题。让我们一步步来分析。

// 回顾算法的关键逻辑：
// Kadane's Algorithm 每次在计算当前子数组和（curr_sum）时，会根据两个值的比较：

// 当前元素本身 nums[i]。
// 当前元素加上之前的子数组和 curr_sum + nums[i]。
// 选择这两个值中的较大值来更新 curr_sum。这一点非常重要，因为算法并不直接“抛弃”某个值，而是通过选择来决定是否继续累加当前的子数组。

// 具体分析 [4, -1, 2, 1] 的处理过程：
// 我们从元素 4 开始逐步分析：

// curr_sum = 4：

// 当前子数组和是 4，显然最大和也是 4。
// 处理 -1：

// 此时，我们有两种选择：
// 直接取 -1，从这里开始一个新的子数组。
// 将 -1 加到当前子数组和 4 中，即 4 + (-1) = 3。
// 解法：curr_sum = Math.max(-1, 4 + (-1)) = 3
// 我们选择累加 -1，因为累加后得到的结果 3 大于单独取 -1。因此，我们不会抛弃 -1，而是继续保留当前的子数组，子数组和更新为 3。
// 处理 2：

// 接下来我们处理 2，有两种选择：
// 直接取 2，从这里开始一个新的子数组。
// 将 2 加到当前子数组和 3 中，即 3 + 2 = 5。
// 解法：curr_sum = Math.max(2, 3 + 2) = 5
// 显然，累加 2 得到的结果 5 更大。因此，我们继续保留当前子数组，子数组和更新为 5。
// 处理 1：

// 最后处理 1，同样有两种选择：
// 直接取 1，从这里开始一个新的子数组。
// 将 1 加到当前子数组和 5 中，即 5 + 1 = 6。
// 解法：curr_sum = Math.max(1, 5 + 1) = 6
// 累加 1 得到的结果 6 最大，因此我们继续累加，子数组和更新为 6。
// 总结 4, -1, 2, 1 的子数组情况：
// 尽管我们遇到了 -1，并没有抛弃它，因为累加 -1 后的子数组和（3）仍然大于抛弃 -1 后的结果（-1 本身）。所以我们选择继续累加。
// Kadane's Algorithm 的灵活性在于，它会比较“继续当前子数组”和“从当前元素重新开始子数组”这两种情况，选择其中更有利的那种。这正是算法在处理负数时的优势。
// 因此，虽然经历了 -1，我们并没有抛弃它，而是继续累加，最后得到最大子数组和为 6。