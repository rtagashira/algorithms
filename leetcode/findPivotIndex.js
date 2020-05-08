// Given an array of integers nums, write a method that returns the "pivot" index of this array.

// We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

// If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

const pivotIndex = (arr) =>{
    if(arr.length === 0) return -1
    let sum = arr.reduce((acc,v)=>acc+v),
        left = 0
    for(let i=0;i<arr.length;i++){
        if(left === sum - left - arr[i]) return i
        left += arr[i]
    }
    return -1
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))//3
console.log(pivotIndex([1, 2, 3]))//-1