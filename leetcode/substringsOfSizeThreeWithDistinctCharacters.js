// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

const countGoodSubstrings = (s) =>{
    let count = 0
    for(let i=0;i<s.length-2;i++){
        let sub = s.slice(i,i+3)
        if(new Set([...sub]).size === 3) count++
    }
    return count
}

console.log(countGoodSubstrings("xyzzaz"))//1
console.log(countGoodSubstrings("aababcabc"))//4