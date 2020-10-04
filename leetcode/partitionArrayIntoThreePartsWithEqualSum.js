// Given an array A of integers, return true if and only if we can partition the array into three non-empty parts with equal sums.

const canThreePartsEqualSum = (a) =>{
    let sum = a.reduce((p,n)=>p+n) / 3
    let count = 0
    let temp = 0
    for(let i=0;i<a.length;i++){
        temp += a[i]
        if(temp === sum){
            count++
            temp = 0
        }
    }
    return count >= 3
}

console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]))//true
console.log(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1]))//false
console.log(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4]))//true