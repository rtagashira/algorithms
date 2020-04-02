// You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

// Given n, find the total number of full staircase rows that can be formed.

const arrangeCoins = (n) =>{
    let sum = 0
    for(let i=0;i<=n;i++){
        sum += i
        if(sum === n){
            return i
        }else if(sum > n){
            return i - 1
        }
    }
}

console.log(arrangeCoins(5))//2
console.log(arrangeCoins(8))//3