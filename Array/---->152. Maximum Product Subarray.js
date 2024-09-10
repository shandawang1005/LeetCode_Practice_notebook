// 152. Maximum Product Subarray
// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 //这题跟58 非常像，只是因为负负得正需要交换位置，要小心

 var maxProduct = function(nums) {
    let max_prod = nums[0];  // 初始化最大乘积为第一个元素
    let min_prod = nums[0];  // 初始化最小乘积为第一个元素
    let result = nums[0];    // 初始化全局最大乘积

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];

        // 如果当前元素是负数，交换最大最小值
        if (curr < 0) {
            [max_prod, min_prod] = [min_prod, max_prod];
        }

        // 更新最大乘积和最小乘积
        max_prod = Math.max(curr, max_prod * curr);
        min_prod = Math.min(curr, min_prod * curr);

        // 更新全局最大乘积
        result = Math.max(result, max_prod);
    }

    return result;
};

//大概的意思是如果是负数，相当于正数会变成负数，最大直接变成最小，然后与result再比。 result和其他东西完全分开，不具有可比性
// 逐步解释：
// 初始化：

// max_prod 和 min_prod 都初始化为数组的第一个元素 nums[0]，因为在开始时最大和最小乘积都只能是第一个元素。
// result 也初始化为 nums[0]，用于保存当前找到的全局最大乘积。
// 遍历数组： 从第二个元素开始遍历数组（因为第一个元素已经初始化过了），对于每一个元素 nums[i]：

// 如果当前元素 nums[i] 是负数，交换 max_prod 和 min_prod。这是因为负数会将最大值变为最小值，最小值变为最大值。
// 更新当前的 max_prod 和 min_prod：
// max_prod = Math.max(curr, max_prod * curr)：选择当前元素 nums[i] 单独作为新子数组，或者将其与前面的最大乘积相乘。
// min_prod = Math.min(curr, min_prod * curr)：选择当前元素 nums[i] 单独作为新子数组，或者将其与前面的最小乘积相乘。
// 更新 result，确保它始终保持当前的全局最大乘积。
// 返回结果：

// 遍历完成后，result 就是子数组的最大乘积。
// 示例 1：nums = [2,3,-2,4]
// 初始状态：max_prod = 2, min_prod = 2, result = 2
// 遍历 3：
// max_prod = Math.max(3, 2 * 3) = 6
// min_prod = Math.min(3, 2 * 3) = 3
// result = Math.max(6, 2) = 6
// 遍历 -2：
// 交换 max_prod 和 min_prod，因为当前是负数。
// max_prod = Math.max(-2, 3 * -2) = -2
// min_prod = Math.min(-2, 6 * -2) = -12
// result = Math.max(6, -2) = 6
// 遍历 4：
// max_prod = Math.max(4, -2 * 4) = 4
// min_prod = Math.min(4, -12 * 4) = -48
// result = Math.max(6, 4) = 6
// 最终输出结果是 6。