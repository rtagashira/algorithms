// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

const addDigits = (num) =>{
    while(num > 9){
        let str = num.toString(),
            sum = 0
        for(let d of str){
            sum += +d
        }
        num = sum
    }
    return num
}

console.log(addDigits(38))//2