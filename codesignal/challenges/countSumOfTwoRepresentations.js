// Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

const countSumOfTwoRepresentations3 = (n, l, r) =>{
    let count = 0
    for(let i=l;i<=r;i++){
        if(n - i <= r && n - i >= i) count++
    }
    return count
}

console.log(countSumOfTwoRepresentations3(6,2,4))//2
console.log(countSumOfTwoRepresentations3(10,3,5))//1
console.log(countSumOfTwoRepresentations3(5,1,5))//2
console.log(countSumOfTwoRepresentations3(10,9,11))//0
console.log(countSumOfTwoRepresentations3(24,8,16))//5