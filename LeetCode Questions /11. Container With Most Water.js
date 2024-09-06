// 11. Container With Most Water
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    maxArea = Math.max(
      maxArea,
      (right - left) * Math.min(height[left], height[right])
    );
    //maxArea 是首先本身，或者right-left即为他们的长（在数轴上的点位差）
    // 其次取left 或者right在y轴上的高（因为是水位线，所以取小的值）
    //    0  1  2  3  4  5
    // 如果left是1， right是5， 那么他们的长则为4， 1到5 有4格
    if (height[left] < height[right]) {
      //这条code是因为如果left小于right，那么为了拿到更大的max，left应该成为下一个，因为这一个太小了，+1后可能会变大。同理right小于left则把right往左移动

      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
