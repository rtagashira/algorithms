// Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

// The digit sum of a positive integer is the sum of all its digits.

const countEven = (num) =>{
    let count = 0
    for(let i=1;i<=num;i++){
        let sum = 0
        let str = i.toString()
        for(s of str){
            sum += +s
        }
        if(sum % 2 === 0) count++
    }
    return count
}