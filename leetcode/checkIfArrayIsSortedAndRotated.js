// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.

// Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

const check = (arr) =>{
    let arr2 = [...arr].sort((a,b)=>a-b),
        str = arr2.join()
    for(let i=0;i<arr.length;i++){
        let str2 = arr.join()
        if(str === str2) return true
        arr.push(arr.shift())
    }
    return false
}

console.log(check([3,4,5,1,2]))//true
console.log(check([2,1,3,4]))//false
console.log(check([1,2,3]))//true