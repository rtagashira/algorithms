// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

const maxProfit = (prices) =>{
    let low,
        profit = 0
    for(let p of prices){
        if(low === undefined || p < low){
            low = p
        }else if(p > low){
            if(p - low > profit) profit = p - low
        }
    }
    return profit
}

// const maxProfit = (prices) =>{
//     let profit = 0
//     for(let i=0;i<prices.length;i++){
//         let max = Math.max(...prices.slice(i+1))
//         if(max > prices[i]){
//             let p = max - prices[i]
//             if(p > profit) profit = p
//         }
//     }
//     return profit
// }

console.log(maxProfit([7,1,5,3,6,4]))//5
console.log(maxProfit([7,6,4,3,1]))//0
console.log(maxProfit([3,3]))//0
console.log(maxProfit([2,4,1]))//2