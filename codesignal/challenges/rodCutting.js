// Serling Enterprises buys long steel rods and cuts them into shorter rods, which it then sells. Each cut is free. Given a rod of length n and an array of prices v, where v[i] stands for the price of a piece with a length of i, determine the maximum revenue that you can obtain by cutting up the rod and selling the pieces.

const rodCutting = (n, v) =>{
    let price = 0
    const helper = (l,a,p = 0)=>{
        if(l === 0){
            if(p > price){
                price = p
            }
        }else if(l > 0){
            for(let i=1;i<a.length;i++){
                if(l - i >= 0){
                    helper(l-i,a,p+a[i])
                }
            }
        }
    }
    helper(n,v)
    return price
}

console.log(rodCutting(4,[0, 2, 4, 7, 7]))//9
console.log(rodCutting(1,[0, 10]))//10
console.log(rodCutting(10,[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))//10
console.log(rodCutting(25,[0, 4, 10, 19, 19, 28, 32, 39, 41, 51, 57, 61,
61, 71, 76, 77, 83, 85, 88, 95, 98, 103, 108, 113, 118, 121]))//156