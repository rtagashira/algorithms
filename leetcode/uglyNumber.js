// Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

const isUgly = (num) =>{
    if(num <= 0) return false
     while(num % 2 === 0) num /= 2
     while(num % 3 === 0) num /= 3
     while(num % 5 === 0) num /= 5
     if(num === 1) return true
     return false
 }

 console.log(isUgly(6))//true
 console.log(isUgly(8))//true
 console.log(isUgly(14))//false