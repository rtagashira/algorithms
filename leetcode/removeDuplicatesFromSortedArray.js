// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

const removeDuplicates = (arr) =>{
    if(arr.length === 0) return []
    while(arr[0]<=arr[1]){
        if(arr[0] === arr[1]){
            arr.shift()    
        }else{
            arr.push(arr.shift())
        }
    }
    arr.push(arr.shift())
    return arr.length
}

console.log(removeDuplicates([1,1,2]))//2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))//5