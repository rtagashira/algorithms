// You are given an integer n. An array nums of length n + 1 is generated in the following way:

// nums[0] = 0
// nums[1] = 1
// nums[2 * i] = nums[i] when 2 <= 2 * i <= n
// nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
// Return the maximum integer in the array nums​​​.

const getMaximumGenerated = (n) =>{
    let arr = n === 0? [0]: [0,1]
    let i = 1
    while((2*i >= 2 && 2*i <= n) || (2*i+1 >= 2 && 2*i+1 <= n)){
        if((2*1 >= 2) && (2*i <= n)){
            arr[2*i] = arr[i]
        }
        if((2*i+1 >= 2) && (2*i+1 <= n)){
            arr[2*i+1] = arr[i] + arr[i+1]
        }
        i++
    }
    return Math.max(...arr)
}

console.log(getMaximumGenerated(7))//3
console.log(getMaximumGenerated(0))//0