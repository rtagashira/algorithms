// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

const addStrings = (num1, num2) =>{
    let carryOne = false
    let sum = ''
    let loop = Math.max(num1.length,num2.length) - 1
    if(num1.length != num2.length){
        if(num1.length < num2.length){
            num1 = '0'.repeat(num2.length - num1.length) + num1
        }else{
            num2 = '0'.repeat(num1.length - num2.length) + num2
        }
    }
    for(let i=loop;i>=0;i--){
        let a = +num1[i]
        let b = +num2[i]
        let total = a + b
        if(carryOne) total++
        if(total > 9){
            carryOne = true
            sum = total.toString().slice(-1) + sum
        }else{
            carryOne = false
            sum = total.toString() + sum
        }
        
    }
    if(carryOne) sum = '1' + sum
    return sum
}

console.log(addStrings(num1 = "11", num2 = "123"))//'134'
console.log(addStrings(num1 = "456", num2 = "77"))//'533'
console.log(addStrings('0','0'))//'0'