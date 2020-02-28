// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

const maxProduct = (nums) =>{
    let p = nums[0],
        prevP = p,
        negP = p,
        // neg = nums[0] < 0? 1 : 0,
        neg = nums[0] < 0? 1 : 0,
        shortNegP,
        posAfterNeg

    for(let i=1;i<nums.length;i++){
        let n = nums[i],
            temp = n * p
        if(temp > p){
            p = temp
            negP *= n
        }else{
            negP *= n
            // if(negP>prevP) prevP = negP
            if(p>prevP) prevP = p
            p = nums[i]
            if(n < 0){
                p = n
            }
        }

        // odd neg numbers
        //subarray starting from second neg number
        if(neg >= 2 && n != 0){
            shortNegP *= n
            if(shortNegP > prevP) prevP = shortNegP
            // n
            // console.log(i)
        }
        if(n<0 && neg<3){
            neg++
            if(neg === 2){
                shortNegP = n
                // console.log(i)
                // n
            }
        }
        if(n ===0){
            neg = 0
        }
        // if(neg >= 2 ){
        //     shortNegP *= n
        //     n
        //     console.log(i)
        // }
        // console.log(shortNegP)
        //subarray starting from first positive number after a negative
        if(posAfterNeg !== undefined){
            posAfterNeg *= n
        }else if(neg ===1 && n > 0 && posAfterNeg === undefined){
            posAfterNeg = n
        }
    }
    p
    prevP
    negP
    shortNegP
    posAfterNeg
    return Math.max(p,prevP,negP,shortNegP||nums[0], posAfterNeg||nums[0])
}

// const maxProduct = (nums) =>{
//     let p = nums[0]
//     const product = (a) => a.reduce((acc,v)=>acc * v)
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<=nums.length;j++){
//             let temp = product(nums.slice(i,j))
//             if(temp > p) p = temp
//         }
//     }
//     return p
// }

// console.log(maxProduct([2,3,-2,4]))//6
// console.log(maxProduct([-2,0,-1]))//0
// console.log(maxProduct([-4,-3]))//12
// console.log(maxProduct([7,-2,-4]))//56
// console.log(maxProduct([2,-5,-2,-4,3]))//24
// console.log(maxProduct([1,0,-1,2,3,-5,-2]))//60
// console.log(maxProduct([1,2,-1,-2,2,1,-2,1]))//8
// console.log(maxProduct([-1,-2,-3,0]))//6
console.log(maxProduct([-2,-2,-3,0,-3,1,-3]))//9
// console.log(maxProduct([3,5,-1,10,2]))//20