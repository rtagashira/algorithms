// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

const findLHS = (nums) =>{
    let obj = {}
    for(let n of nums){
        obj[n]? obj[n]++ : obj[n] = 1
    }
    let keys = Object.keys(obj)
    if(keys.length === 1) return 0
    keys.sort((a,b)=>+a - +b)
    
    //find the biggest sum of two key frequencies
    // of keys that are 1 apart
    let total = 0
    for(let i=0;i<keys.length;i++){
        let temp = obj[keys[i]]
        let after = 0
        if(i+1 <= keys.length - 1 && keys[i+1] - 1 === +keys[i]){
            after = obj[keys[i+1]]
        }
        if(after === 0)continue
        temp += after
        if(temp > total) total = temp
    }

    return total
}

console.log(findLHS([1,3,2,2,5,2,3,7]))//5
console.log(findLHS([1,2,3,3,1,-14,13,4]))//3
console.log(findLHS([1,1,1,1,1,1,1,1,0]))//9
console.log(findLHS([1,4,1,3,1,-14,1,-13]))//2
console.log(findLHS([0,3,0,0,1,1,1,3,1,3,2,3,2,3,
    -1,0,2,1,0,0,0,1,3,3,-3,3,3,1,3]))//14