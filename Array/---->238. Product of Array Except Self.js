// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

const productExceptSelf = function (nums) {
  const n = nums.length;
  const prefix = new Array(n).fill(1); // 初始化前缀数组，默认值为1
  const suffix = new Array(n).fill(1); // 初始化后缀数组，默认值为1
  const result = new Array(n); // 最终结果数组

  // 计算前缀积
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1]; // 当前元素等于前一个前缀乘以前一个数
  }

  // 计算后缀积
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1]; // 当前元素等于后一个后缀乘以后一个数
  }

  // 计算结果
  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i]; // result的每一项等于前缀和后缀的乘积
  }

  return result;
};

const productExceptSelf2 = function (nums) {
  const n = nums.length;
  const result = new Array(n);

  // 计算前缀积
  result[0] = 1; // 第一个位置前没有元素
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // 计算后缀积并更新结果
  let suffixProduct = 1; // 最后一个位置后没有元素
  for (let i = n - 1; i >= 0; i--) {
    result[i] = result[i] * suffixProduct;
    suffixProduct *= nums[i]; // 更新后缀积
  }

  return result;
};
//=======================================================看这个=====================================================
//前缀积 [1,1,2,6]    1*1， 1*1，1*2，1*2*3
//后缀积[24,12,4,1]  4*3*2, 4*3,  4,    1
//相乘[24,12,8,6]
const productExceptSelf3 = function (nums) {
  let result = [];
  let start = 1; //这个表达的是从左往右时 最左边的左边没有东西，所以default成1；但是start会被更新
  for (let i = 0; i < nums.length; i++) {
    result.push(start);
    start = start * nums[i]; //把start更新成左边所有的数字的乘（每次更新nums[i]乘start本身）
  }
  let start2 = 1; //这个是从右到左
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * start2;
    start2 = start2 * nums[i];
  }
  return result;
};
//=======================================================看这个=====================================================

// 示例使用
const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // 输出: [24, 12, 8, 6]

//24是2*3*4， 12是1*3*4， 8是1*2*4，6是1*2*3

// 1. 问题的核心：
// 我们要计算一个数组中每个元素除自身以外的所有元素的乘积。如果直接用乘法会比较简单，但题目要求不能使用除法，于是我们需要找其他方式。

// 2. 从简单例子入手：
// 假设数组是 [1, 2, 3, 4]，我们试图找出每个元素的“除自身以外”的乘积：

// result[0]：2 * 3 * 4 = 24
// result[1]：1 * 3 * 4 = 12
// result[2]：1 * 2 * 4 = 8
// result[3]：1 * 2 * 3 = 6
// 3. 如何计算除自身以外的乘积：
// 对于每一个 result[i]，它是由 nums 数组中左边所有元素和右边所有元素的乘积组成。
// 比如：

// result[2] = 1 * 2 * 4，其实是左边的乘积 1 * 2 和右边的乘积 4 组合在一起的。
// 这给了我们一个启示：我们可以把问题分为前缀乘积（左边的数）和后缀乘积（右边的数）。这样就不需要复杂的多次遍历。

// 4. 前缀积和后缀积的思路：
// 既然每个 result[i] 由左边和右边的数构成，那么我们可以：

// 先计算前缀积，即从左往右遍历，记录每个元素左边所有数的乘积。
// 再计算后缀积，即从右往左遍历，记录每个元素右边所有数的乘积。
// 最后，每个 result[i] 都是 prefix[i] * suffix[i] 的结果。
// 5. 通过数组来存储前缀和后缀积：
// 前缀积：
// 如果我们已经知道第 i-1 个位置的前缀乘积，那么第 i 个位置的前缀积就是前一个位置的前缀积乘上当前的 nums[i-1]。

// 后缀积：
// 类似地，如果我们已经知道第 i+1 个位置的后缀乘积，那么第 i 个位置的后缀积就是后一个位置的后缀积乘上当前的 nums[i+1]。

// 6. 总结推导过程：
// 确定每个 result[i] 由前后两个部分组成。
// 通过前缀积和后缀积分别计算前后部分。
// 将前缀积和后缀积相乘，得到最终结果。
// 这个方法的核心在于将乘积的计算分解，避免了重复计算所有元素的乘积，通过一次前缀和一次后缀遍历来得到结果。这种分解问题的思路通常用于需要避免重复计算的场景，特别适合线性时间复杂度要求的题目。
