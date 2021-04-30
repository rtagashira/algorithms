// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

const hasAlternatingBits = (n) =>{
    let str = n.toString(2)
    for(let i=1;i<str.length;i++){
        if(str[i] === str[i-1]) return false
    }
    return true
}

console.log(hasAlternatingBits(5))//true
console.log(hasAlternatingBits(7))//false
console.log(hasAlternatingBits(11))//false
console.log(hasAlternatingBits(10))//true