// 735. Asteroid Collision

// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Example 1:

// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
// Example 2:

// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.
// Example 3:

// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
var asteroidCollision = function (asteroids) {
  let stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    let current = asteroids[i];

    // Handle collisions
    while (stack.length > 0 && stack[stack.length - 1] > 0 && current < 0) {
      let top = stack[stack.length - 1];
      if (Math.abs(current) > top) {
        stack.pop(); // Destroy the smaller positive asteroid and continue to check
      } else if (Math.abs(current) === top) {
        stack.pop(); // Both asteroids destroy each other
        current = 0; // Mark current asteroid as destroyed
        break;
      } else {
        current = 0; // Current negative asteroid gets destroyed
        break;
      }
    }
    // If the current asteroid survived the collisions, push it onto the stack
    if (current !== 0) {
      stack.push(current);
    }
  }
  return stack;
};
// 重点在于如果stack末尾是大于零同时a[i]小于零， 需要比较他们的绝对值，绝对值大的一方留下，小的一方死掉，
// 如果是相等，那么直接一起死（pop完把current 也设成0） 然后如果current不等于0，直接push进去
// 提问:里面只包含了current不等于0 和小于零，如果大于零呢？ 同时stack最后一位小于零

// 提到的情况是当current是正数时，并且栈中最后一个元素是负数的情况。这种情况下，由于正数和负数的相对方向不同，
// ====>>>>>它们不会发生碰撞。<<<<<<<=======因此，正数可以直接入栈。。
