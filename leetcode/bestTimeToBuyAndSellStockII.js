// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).


const maxProfit = (prices) =>{
    let low, 
        high,
        profit = 0
        
    for(let i=0;i<prices.length;i++){
        let p = prices[i]

        if(p < high){
            profit += high - low
            low = p
            high = undefined
        }else if(low === undefined || p < low){
            low = p
        }else if((high === undefined && p > low)){
            high = p
        }else if(p > high){
            high = p
        }

        if(i === prices.length - 1 && high !== undefined) profit += high - low
    }
    return profit
}

console.log(maxProfit([7,1,5,3,6,4]))//7
console.log(maxProfit([1,2,3,4,5]))//4
console.log(maxProfit([2,4,1]))//2
console.log(maxProfit([6,1,3,2,4,7]))//7