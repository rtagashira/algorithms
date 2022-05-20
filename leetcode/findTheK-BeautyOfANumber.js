// The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

// It has a length of k.
// It is a divisor of num.
// Given integers num and k, return the k-beauty of num.

// Note:

// Leading zeros are allowed.
// 0 is not a divisor of any value.
// A substring is a contiguous sequence of characters in a string.

const divisorSubstrings = (num, k) =>{
    let str = num.toString()
    let count = 0
    for(let i=0;i<=str.length - k;i++){
        let s = str.slice(i, i+k)
        if(num % +s === 0) count++
    }
    return count
}