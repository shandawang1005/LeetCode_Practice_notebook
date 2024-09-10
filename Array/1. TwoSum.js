// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
const nums = [3, 3],
  target = 6;
// Output: [0,1]

// Solution:

var twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + target === nums[j]) {
        result.push(i, j);
        return result; // Assuming we only need one valid pair
      }
    }
  }
  return result; // If no valid pair is found
};

// console.log(twoSum(nums1, target1));

var twoSum = function (nums, target) {
  //nums is an array
  //target is a number
  //target = nums[x] +nums[y]   return [x,y ]
  let map = new Map();
  // console.log("🚀 ~ twoSum ~ map:", map)

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      // console.log("🚀 ~ twoSum ~ map:", map)
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }

  return []

};

// const nums1 = [2, 7, 11, 15]
// const target1 = 9
// console.log(twoSum(nums1, target1))
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



// 重点在于loop的时候要用target减去loop进去的东西，能快一些，当然直接加也可以

// Python:
// def two_sum(nums, target):
//     for i in range(len(nums)):             # 外层循环，遍历数组中的每一个元素
//         for j in range(i + 1, len(nums)):  # 内层循环，从下一个元素开始遍历
//             if nums[i] + nums[j] == target:  # 检查两个元素的和是否等于目标值
//                 return [i, j]               # 如果找到了，返回它们的索引
//     return None                             # 如果没有找到匹配的组合，返回 None

//or

// def two_sum(nums, target):
//     num_to_index = {}  # 用来保存已经遍历过的数字及其索引

//     for i, num in enumerate(nums):
//         complement = target - num
//         if complement in num_to_index:
//             return [num_to_index[complement], i]  # 找到两个数的索引

//后面这步关键
//         num_to_index[num] = i  # 存储当前数字和它的索引

//     return None  # 如果没有找到符合条件的数字，返回 None

//enumerate 相当于 index of nums 可以直接用i来对应每个nums里面的数字所对应的index
