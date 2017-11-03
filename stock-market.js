
/**
 * Given an array of numbers that represent stock prices on given days
 * returns the maximum profit possible from buying at the lowest and
 * selling at the highest price.
 *
 * @param  {Array <numbers>} stockprices An array containing numbers.
 * @return {number}             The maximum profit when there is profit. Or -1 when no profit.
 */

function maxProfits (stockprices) {
  // Check that the input is an array.
  if (inputChecker(stockprices) == false) {
    return "Not a valid input.";
  }
  // If no profit then we want to return -1.
  var biggestProfit = -1;
  // Takes each price and compares it to the prices in the array.
  for (var i = 0; i < stockprices.length; i++) {
    var buyingPrice = stockprices[i];
    // Compares the buying price against all upcoming stock prices.
    // Loop starts at the same spot as i so we don't compare to previous days.
    for (var j = i; j < stockprices.length; j++) {
      var sellingPrice = stockprices[j];
      var profit = 0;
      // Only make a change if the buy price is lower than sell.
      if (buyingPrice < sellingPrice) {
        profit = sellingPrice - buyingPrice;
      }
      // Only increase the max profit amount if the profit is higher than the current
      // biggest profit.
      if (profit >= biggestProfit) {
        biggestProfit = profit;
      }
    }
  }
  return biggestProfit;
}

// Check that the input is a valid array filled with numbers.

function inputChecker (array) {
  if (Array.isArray(array) == false) {
    return false;
  }
  var state = true;
  array.forEach(function(item) {
    if (typeof item !== 'number') {
      state = false;
    }
  });
  return state;
}

// console.log(maxProfits("abcdefg"));
// console.log(maxProfits([1, 2, 3, 5]));
// console.log(maxProfits(["a", "b", 3, "a"]));



