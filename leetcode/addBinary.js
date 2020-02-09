// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

const addBinary = (a, b) =>{
    let sum = '',
        carry1 = 0,
        length = Math.max(a.length,b.length),
        newA = '0'.repeat(length - a.length) + a,
        newB = '0'.repeat(length - b.length) + b
    for(let i=length-1;i>=0;i--){
        let temp = +newA[i] + +newB[i] + carry1
        if(temp >= 2){
            if(temp === 2){
                sum = '0' + sum
            }else if(temp === 3){
                sum = '1' + sum
            }
            carry1 = 1
        }else{
            carry1 = 0
            sum = temp === 1? '1' + sum: '0' + sum
        }
    }
    if(carry1) sum = '1' + sum
    return sum
}

console.log(addBinary('11','1'))//'100'