// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.

const sumOddLengthSubarrays = (arr) =>{
    let sum = 0
    const add = a => a.reduce((a,b)=>a+b)
    
    for(let i=0;i<arr.length;i++){
        let l = 1
        while(i + l <= arr.length){
            sum += add(arr.slice(i,i+l))
            l += 2
        }
    }
    return sum
}

console.log(sumOddLengthSubarrays([1,4,2,5,3]))//58
console.log(sumOddLengthSubarrays([1,2]))//3
console.log(sumOddLengthSubarrays([10,11,12]))//66