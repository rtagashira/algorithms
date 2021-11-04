// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.

const kthDistinct = (arr, k) =>{
    let obj = {}
    let a = []
    for(let str of arr){
        obj[str]? obj[str]++ : obj[str] = 1
    }
    
    for(let key in obj){
        if(obj[key] === 1) a.push(key)
    }
    
    if(a.length >= k){
        return a[k-1]
    }else{
        return ''
    }
}

console.log(kthDistinct(arr = ["d","b","c","b","c","a"], k = 2))//'a'
console.log(kthDistinct(arr = ["aaa","aa","a"], k = 1))//'aaa'
console.log(kthDistinct(arr = ["a","b","a"], k = 3))//''