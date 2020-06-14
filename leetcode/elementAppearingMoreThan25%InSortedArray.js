// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.

// Return that integer.

const findSpecialInteger = (arr) =>{
    const obj = {}
    for(let n of arr){
        obj[n]? obj[n]++ : obj[n] = 1
        if(obj[n] > arr.length/4) return n
    }
}

console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]))//6