// Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

const findMaxAverage = (nums, k)=>{
    let slice = nums.slice(0,k)
    let sum = slice.reduce((a,b)=>a+b)
    let rest = nums.slice(k)
    let max = sum

    for(let n of rest){
        sum += -slice.shift() + n
        if(sum > max) max = sum
        slice.push(n)
    }
    return max / k    
}

console.log(findMaxAverage([1,12,-5,-6,50,3], k = 4))//12.75
console.log(findMaxAverage([8,0,1,7,8,6,5,5,6,7],5))//6.20000
console.log(findMaxAverage([6,8,6,8,0,4,1,2,9,9],2))//9