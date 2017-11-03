/**
 * Given an input, checks that it is an array containing only numbers.
 * @param  {<anything>} input   What we want to check to see if it is an array with numbers.
 * @return {Boolean}       True or False.
 */

function inputChecker (input) {
  if (Array.isArray(input) === false) {
    return false;
  }
  var state = true;
  input.forEach(function(item) {
    if (typeof item !== 'number') {
      state = false;
    }
  });
  return state;
}

/**
 * Given an array of numbers that represent stock prices on given days
 * returns the maximum profit possible from buying at the lowest and
 * selling at the highest price.
 *
 * For example: Given [45, 24, 35, 31, 40, 38, 11]
 * the biggest profit would be 16.
 *
 * @param  {Array <numbers>} stockprices An array containing numbers.
 * @return {number}             The maximum profit when there is profit. Or -1 when no profit.
 */

function maxProfits (stockprices) {
  // Check that the input is an array.
  if (inputChecker(stockprices) === false) {
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