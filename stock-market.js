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
  for (var i = 0; i < stockprices.length; i++) {

    var buyingPrice = stockprices[i];

    for (var j = 0; j < stockprices.length; j++) {
      var sellingPrice = stockprices[j];

      // console.log("Buying at", buyingPrice, "selling at", sellingPrice);


      var profit = sellingPrice - buyingPrice;

      // console.log(profit);

      // console.log(profit);

      // console.log(profit);
      if (profit >= biggestProfit) {

        biggestProfit = profit;

      }

    }

  }

  return biggestProfit;
}

// console.log(maxProfits([1, 5, 10]));

console.log("The result should be: 9", maxProfits([1, 5, 10]));
console.log("The result should be: 16", maxProfits([45, 24, 35, 31, 40, 38, 11]));
console.log("The result should be: -1", maxProfits([10, 9, 8, 7, 0]));
