// Input is an array of numbers, each number representing
// the price of a given stock on a day.
//
// Sample input: [45, 24, 35, 31, 40, 38, 11]
// Should yield: 16
//

function maxProfits (stockprices) {

  // If no profit then we want to return -1.
  var biggestProfit = -1;

  // We only go to second last item in array
  for (var i = 0; i < stockprices.length - 2; i++) {

    var buyingPrice = stockprices[i];

    for (var j = 0; j < stockprices.length -2; j++) {

      var profit = stockprices[j] - buyingPrice;
      // console.log(profit);
      if (profit >= biggestProfit) {
        biggestProfit = profit;
      }

    }

  }

  return biggestProfit;
}

console.log(maxProfits([1, 5, 10]));
