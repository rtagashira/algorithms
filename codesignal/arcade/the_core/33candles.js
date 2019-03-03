// When a candle finishes burning it leaves a leftover. makeNew leftovers can be combined to make a 
// new candle, which, when burning down, will in turn leave another leftover.

// You have candlesNumber candles in your possession. What's the total number of candles you can burn, 
// assuming that you create new candles as soon as you have enough leftovers?

function candles(candlesNumber, makeNew) {
  let total = candlesNumber
  let leftOver = 0
  while(candlesNumber>0){
    total += Math.floor(candlesNumber/makeNew)
    candlesNumber= Math.floor(candlesNumber/makeNew)
    leftOver++
    if(leftOver === makeNew){
      total ++
    }
  }
  return total
}
//-------------------------------------------------------------------
// function candles(candles, makeNew) {
//   return candles + Math.floor((candles - 1) / (makeNew - 1));
// }


console.log(candles(5,2))//9