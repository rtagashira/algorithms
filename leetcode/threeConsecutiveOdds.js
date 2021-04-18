// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

const threeConsecutiveOdds = (arr) =>{
    let count = 0
    for(let n of arr){
        if(n % 2 != 0){
            count++
            if(count === 3) return true
        }else{
            count = 0
        }
    }
    return false
}

console.log(threeConsecutiveOdds([2,6,4,1]))//false
console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]))//true