// There is a function signFunc(x) that returns:

// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).

const arraySign = (nums) =>{
    let count = 0
    for(let n of nums){
        if(n === 0){
            return 0
        }else if(n < 0){
            count++
        }
    }
    return count % 2 === 0? 1 : -1
}

console.log(arraySign([-1,-2,-3,-4,3,2,1]))//1
console.log(arraySign([1,5,0,2,-3]))//0
console.log(arraySign([-1,1,-1,1,-1]))//-1