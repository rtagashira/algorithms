// We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

// Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.

const checkPerfectNumber = (num) =>{
    if(num === 0) return false
    let sum = 0
    for(let i=1;i*i<=num;i++){
        if(num % i === 0){
            sum += i
            if(i * i !== num){
                sum += num / i
            }
        }
    }
    return sum - num === num
}

// const checkPerfectNumber = (num) =>{
//     if(num === 0) return false
//     let sum = 0
//     for(let i=1;i<num;i++){
//         if(num % i === 0){
//             sum += i
//         }
//     }
//     return sum === num
// }

console.log(checkPerfectNumber(28))//true
console.log(checkPerfectNumber(0))//false