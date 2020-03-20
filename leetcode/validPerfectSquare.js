// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

const isPerfectSquare = (num) =>{
    for(let i=1;i<=num;i++){
        if(i ** 2 === num) return true
        if(i ** 2 > num) return false
    }
}

console.log(isPerfectSquare(16))//true
console.log(isPerfectSquare(14))//false