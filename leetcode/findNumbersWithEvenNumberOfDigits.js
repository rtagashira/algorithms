// Given an array nums of integers, return how many of them contain an even number of digits.

const findNumbers = (nums) =>{
    let count = 0
    for(let n of nums){
        if(n.toString().length % 2 === 0) count++
    }
    return count
}