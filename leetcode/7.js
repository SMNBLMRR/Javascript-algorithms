// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function (prices) {
  let min = prices[0],
    max = 0;
  let l = 1,
    j = 0;
  while (l < prices.length) {
    min = Math.min(min, prices[j]);
    max = Math.max(max, prices[l] - min);
    l++;
    j++;
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
