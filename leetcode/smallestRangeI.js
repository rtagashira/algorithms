// Given an array A of integers, for each integer A[i] we may choose any x with -K <= x <= K, and add x to A[i].

// After this process, we have some array B.

// Return the smallest possible difference between the maximum value of B and the minimum value of B.

const smallestRangeI = (a, k) =>{
    if(a.length === 1) return 0
    a.sort((x,y)=>x-y)
    let first = a[0] + k,
        last = a[a.length - 1] - k
    return first >= last? 0: last - first
}

console.log(smallestRangeI([1],0))//0
console.log(smallestRangeI([0,10],2))//6