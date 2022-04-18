// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

const findClosestNumber = nums =>{
    let num
    for(let n of nums){
        if(num === undefined){
            num = n
        }else if(Math.abs(n) < Math.abs(num)){
            num = n
        }else if(Math.abs(n) === Math.abs(num) && n > num){
            num = n
        }
    }
    return num
}