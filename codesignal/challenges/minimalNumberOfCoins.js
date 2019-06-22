// You find yourself in Bananaland trying to buy a banana. You are super rich so you have an unlimited supply of banana-coins, but you are trying to use as few coins as possible.

// The coin values available in Bananaland are stored in a sorted array coins. coins[0] = 1, and for each i (0 < i < coins.length) coins[i] is divisible by coins[i - 1]. Find the minimal number of banana-coins you'll have to spend to buy a banana given the banana's price.

function minimalNumberOfCoins(coins, price) {
  let coinTotal = 0
  for(let coin of coins.reverse()){
    while(price >= coin){
      coinTotal++
      price -= coin
    }
  }
  return coinTotal
}

console.log(minimalNumberOfCoins([1, 2, 10],28))//6
console.log(minimalNumberOfCoins([1, 5, 10, 100],239))//10
console.log(minimalNumberOfCoins([1],8))//8
console.log(minimalNumberOfCoins([1, 2, 20, 60, 120],150))//7
console.log(minimalNumberOfCoins([1, 3, 6, 30],45))//4