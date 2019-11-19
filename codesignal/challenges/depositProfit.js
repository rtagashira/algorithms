// You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.

let depositProfit = (deposit, rate, threshold) =>{
  let year = 0
  while(deposit < threshold){
      year++
      deposit += deposit * rate / 100
  }
  return year
}

console.log(depositProfit(100,20,170))//3
console.log(depositProfit(100,1,101))//1