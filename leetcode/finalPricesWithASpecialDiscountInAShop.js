// Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

// Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.

const finalPrices = (prices) =>{
    for(let i=0;i<prices.length-1;i++){
        for(let j=i+1;j<prices.length;j++){
            if(prices[j] <= prices[i]){
                prices[i] = prices[i] - prices[j]
            break
            }
        }
    }
    return prices
}

console.log(finalPrices([8,4,6,2,3]))//[4,2,4,2,3]
console.log(finalPrices([1,2,3,4,5]))//[1,2,3,4,5]
console.log(finalPrices([10,1,1,6]))//[9,0,1,6]