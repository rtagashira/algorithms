// Let's call an array A a mountain if the following properties hold:

// A.length >= 3
// There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
// Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

const peakIndexInMountainArray = (a) =>{
    for(let i=1;i<=a.length-2;i++){
        if(a[i]>a[i-1] && a[i]>a[i+1]) return i
    }
}

console.log(peakIndexInMountainArray([0,1,0]))//1
console.log(peakIndexInMountainArray([0,2,1,0]))//1