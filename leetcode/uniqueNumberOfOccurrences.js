// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

const uniqueOccurrences = (arr) =>{
    const obj = {}
    for(let n of arr){
        obj[n]? obj[n]++ : obj[n] = 1
    }
    return new Set(Object.values(obj)).size === Object.keys(obj).length
}

console.log(uniqueOccurrences([1,2,2,1,1,3]))//true
console.log(uniqueOccurrences([1,2]))//false
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))//true