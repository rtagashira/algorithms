// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

const checkIfExist = (arr) =>{
    let set = new Set(arr)
    for(let n of arr){
        if(n !== 0){
            if(set.has(n*2)) return true
        }else{
            if(arr.filter(x=>x===0).length > 1) return true
        }
    }
    return false
}