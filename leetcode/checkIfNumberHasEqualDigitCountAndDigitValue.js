// You are given a 0-indexed string num of length n consisting of digits.

// Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.

const digitCount = (num) =>{
    let obj = {}
    for(let char of num){
        obj[char]? obj[char]++ : obj[char] = 1
    }
    for(let i=0;i<num.length;i++){
        if(obj[i] === undefined){
            if(num[i] !== '0') return false
        }
        else if(obj[i] !== +num[i]){
            return false
        }
    }
    return true
}

console.log(digitCount("1210"))//true
console.log(digitCount("030"))//false