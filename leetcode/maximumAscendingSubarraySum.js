// Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.

// A subarray is defined as a contiguous sequence of numbers in an array.

// A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi < numsi+1. Note that a subarray of size 1 is ascending.

const maxAscendingSum = (arr) =>{
    let sum = 0
    let temp = 0
    for(let i=0;i<arr.length;i++){
        if(temp === 0){
            temp += arr[i]
            sum = temp
        }else if(arr[i] > arr[i-1]){
            temp += arr[i]
            if(temp > sum) sum = temp
        }else{
            temp = arr[i]
            if(temp > sum) sum = temp
        }
    }
    return sum
}

console.log(maxAscendingSum([10,20,30,5,10,50]))//65
console.log(maxAscendingSum([10,20,30,40,50]))//150