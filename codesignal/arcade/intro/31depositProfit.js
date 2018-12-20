// You have deposited a specific amount of money into your bank account. Each year your balance increases at
//  the same growth rate. With the assumption that you don't make any additional deposits, find out how long 
// it would take for your balance to pass a specific threshold. Of course you don't want to wait too long, 
// so you know that the answer is not greater than 6.

// Example

// For deposit = 100, rate = 20, and threshold = 170, the output should be
// depositProfit(deposit, rate, threshold) = 3.

function depositProfit(deposit, rate, threshold) {
  let year = 0
  rate = rate/100 + 1
  while(deposit<threshold){
    deposit *= rate
    year++
  }
  return year
}

console.log(depositProfit(100,20,170))//3