// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }

  return false;
};
//也可以用两个loop，上面的方法是先把他sort完直接比i-1


//Python:
// def containsDuplicate(self, nums: List[int]) -> bool:
// nums.sort()

// for i in range(1, len(nums)):
//     if nums[i] == nums[i - 1]:
//         return True

// return False
