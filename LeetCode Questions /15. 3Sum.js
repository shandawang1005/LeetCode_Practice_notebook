// 15. 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

//整体来说就是三个一组要加起来等于0

var threeSum = function (nums) {
  let result = [];

  // 第一步：对数组进行排序
  nums.sort((a, b) => a - b);
  // [-1,0,0,1]
  // 第二步：遍历数组
  for (let i = 0; i < nums.length - 2; i++) {
    // 如果当前元素与之前元素相同，跳过以避免重复三元组
    // 跳过重复元素是因为 [-1,0,0,0,1], 符合条件的是[-1,0,1], 但是如果不跳过，left不++的话，就会有很多个[-1,0,1] 与下面同理
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 双指针初始化
    let left = i + 1;
    let right = nums.length - 1;
    //这步相当于[i, left , x,x,x,x,x,right]
    //如果 i + left + right >0, 那么由于已经sort过了，所以需要right往左移动，即 line 57，right--

    // 第三步：使用双指针寻找满足条件的另外两个数
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // 找到一个三元组，加入结果集
        result.push([nums[i], nums[left], nums[right]]);

        // 移动左指针并跳过重复元素

        //跳过重复元素是因为 [-1,0,0,0,1], 符合条件的是[-1,0,1], 但是如果不跳过，left不++的话，就会有很多个[-1,0,1]

        while (left < right && nums[left] === nums[left + 1]) left++;
        // 移动右指针并跳过重复元素
        while (left < right && nums[right] === nums[right - 1]) right--;

        // 继续移动指针
        left++;
        right--;
      } else if (sum < 0) {
        // 如果和小于 0，说明需要增大和，移动左指针
        left++;
      } else {
        // 如果和大于 0，说明需要减小和，移动右指针
        right--;
      }
    }
  }

  return result;
};
