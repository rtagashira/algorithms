// When a candle finishes burning it leaves a leftover. makeNew leftovers can be combined to make a new candle, which, when burning down, will in turn leave another leftover.

// You have candlesNumber candles in your possession. What's the total number of candles you can burn, assuming that you create new candles as soon as you have enough leftovers?

let candles = (candles, makeNew)=> {
  let leftover = candles,
      total = candles
  while(leftover >= makeNew){
      candles = Math.floor(leftover/makeNew)
      total += candles
      leftover = candles + leftover % makeNew
  }
  return total
}

console.log(candles(5,2))//9
console.log(candles(1,2))//1
console.log(candles(3,3))//4
console.log(candles(11,3))//16
console.log(candles(15,5))//18
console.log(candles(12,2))//23