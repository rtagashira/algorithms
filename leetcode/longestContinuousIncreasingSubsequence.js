// Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

const findLengthOfLCIS = (arr) =>{
    let count = 1,
        current = 1
    if(arr.length === 0) return 0
    for(let i=1;i<arr.length;i++){
        if(arr[i] > arr[i-1]){
            current++
            if(current > count) count = current
        }else{
            current = 1
        }
    }
    return count
}

console.log(findLengthOfLCIS([1,3,5,4,7]))//3
console.log(findLengthOfLCIS([2,2,2,2,2]))//1