// Given an array of integers nums, you start with an initial positive value startValue.

// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

// Return the minimum positive value of startValue such that the step by step sum is never less than 1.

const minStartValue = (nums) =>{
    let sum = 1,
        start = 1
    for(let v of nums){
        if(v >= 0){
            sum += v
        }else{
            if(sum + v < 1){
                let x = Math.abs(sum + v) + 1
                sum += x + v
                start += x
            }else{
                sum += v
            }
        }
    }
    return start
}

console.log(minStartValue([-3,2,-3,4,2]))//5
console.log(minStartValue([1,2]))//1
console.log(minStartValue([1,-2,-3]))//5
console.log(minStartValue([5,4,-5,-5,0]))//2