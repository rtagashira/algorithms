// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

const numberOfSteps  = (num) =>{
    let steps = 0
    while(num !== 0){
        num % 2 === 0? (num /= 2, steps++) : (num -= 1, steps++)
    }
    return steps
}

console.log(numberOfSteps(14))//6
console.log(numberOfSteps(8))//4