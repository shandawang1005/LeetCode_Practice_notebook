// 121 Best Time to Buy and Sell Stock
//  You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

const prices = [7, 6, 4, 3, 1];
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

const maxProfit = function (prices) {
  let maxProfit = 0;
  let buy = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    }
    maxProfit = Math.max(maxProfit, prices[i] - buy);
  }
  return maxProfit;
};

//重点在于先找到那个最低价，然后找最低价后面的最高价

//Python:
// def maxProfit(self, prices):
// buy = prices[0]
// profit = 0
// for i in range(1, len(prices)):
//     if prices[i] < buy:
//         buy = prices[i]
//     elif prices[i] - buy > profit:   如果某个在最低价后面的价格减去买价大于现有profit，那么profit更新
//         profit = prices[i] - buy
// return profit
