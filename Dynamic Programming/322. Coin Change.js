// 322. Coin Change
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

//动态规划
var coinChange = function (coins, amount) {
  //先做一个array, 用Infinity 填满
  //dp[i]=Infinity, i是每一元钱，即从0到amount的所有数字，dp[i]是需要个coins数
  let dp = Array(amount + 1).fill(Infinity);
  //根据25行，dp[0]不需要任何coins
  dp[0] = 0;
  //loop through since $1 all the way up to $amount
  for (let i = 1; i <= amount; i++) {
    //loop every coins type
    for (let coin of coins) {
      //如果金额减去当前coin type 大于等于0，说明dp[i]需要更新
      if (i - coin >= 0) {
        //dp[i]取本身或者dp[i-coin]（这个的意思是比如原本是3元可以由2元+1元组成最少，这样就直接用dp[3]+1
        //这个+1 加的是coin本身，剩下的部分是dp[i-coin]
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  // 如果 dp[amount] 仍然是 Infinity，说明无法凑齐，返回 -1
  return dp[amount] === Infinity ? -1 : dp[amount];
};

//下面是贪心算法，算不到edgecase 可以参考用于以后的其他题型，这题要用动态规划
var coinChange = function (coins, amount) {
  coins = coins.sort((a, b) => b - a);
  let count = 0;
  for (let coin of coins) {
    if (amount === 0) {
      return count;
    }
    while (amount >= coin) {
      count++;
      amount -= coin;
    }
  }
  return amount === 0 ? count : -1;
};
