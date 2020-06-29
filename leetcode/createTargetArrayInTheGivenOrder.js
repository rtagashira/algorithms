// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.

const createTargetArray = (nums, index) =>{
    let arr = []
    for(let i=0;i<nums.length;i++){
        let left = arr.slice(0,index[i])
        let right = arr.slice(index[i])
        arr = [...left,nums[i],...right]
    }
    return arr
}

console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]))//[0,4,1,3,2]