// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Find the kth positive integer that is missing from this array.

const findKthPositive = (arr, k) =>{
    let mArr = [],
        set = new Set(arr)
    for(let i=1;i<arr[arr.length-1];i++){
        if(!set.has(i)) mArr.push(i)
    }
    if(k>mArr.length){
        let n = arr[arr.length-1]
        while(mArr.length < k){
            n++
            mArr.push(n)
        }
        return mArr.pop()
    }
    return mArr[k-1]
}

console.log(findKthPositive(arr = [2,3,4,7,11], k = 5))//9
console.log(findKthPositive(arr = [1,2,3,4], k = 2))//6
console.log(findKthPositive([2,3,4,7,11],5))//9