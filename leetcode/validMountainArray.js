// Given an array A of integers, return true if and only if it is a valid mountain array.

// Recall that A is a mountain array if and only if:

// A.length >= 3
// There exists some i with 0 < i < A.length - 1 such that:
// A[0] < A[1] < ... A[i-1] < A[i]
// A[i] > A[i+1] > ... > A[A.length - 1]

const validMountainArray = (a) =>{
    if(a.length < 3) return false
    if(a[1] <= a[0]) return false
    let peak = false
    for(let i=0;i<a.length;i++){
        if(!peak){
            if(a[i] < a[i-1]){
                peak = true    
            }else if(a[i] === a[i-1]){
                return false
            }
        }else{
            if(a[i] >= a[i-1]) return false
        }
    }
    return peak
}

console.log(validMountainArray([2,1]))//false
console.log(validMountainArray([3,5,5]))//false
console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]))//false
console.log(validMountainArray([9,8,7,6,5,4,3,2,1,0]))//false