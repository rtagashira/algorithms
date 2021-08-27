// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

const findGCD = (nums) =>{
    let small = 1000
    let big = 0
    for(let n of nums){
        if(n < small) small = n
        if(n > big) big = n
    }
    let loop = small
    while(loop > 0){
        if(big % loop === 0 && small % loop === 0) return loop
        loop--
    }
}

console.log(findGCD([2,5,6,9,10]))//2
console.log(findGCD([7,5,6,8,3]))//1
console.log(findGCD([3,3]))//3