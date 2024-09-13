// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
var moveZeroes = function (nums) {
  //array  [0,1,0,3,12]
  // loop
  // 0 0  ==>2 pointers  one is pointing to zero, one is pointing to others
  let zero = 0; //index
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[zero], nums[i]] = [nums[i], nums[zero]];
      zero++;
    }
  }

  return nums;
};


var moveZeroes2 = function (nums) {
  let firstZero = -1;
  for (let i = 0; i < nums.length; i++) {
    if (firstZero === -1) {
      if (nums[i] === 0) {
        firstZero = i;
      }
    } else if (nums[i] !== 0) {
      [nums[i], nums[firstZero]] = [nums[firstZero], nums[i]];
      firstZero++;
    }
  }
};
