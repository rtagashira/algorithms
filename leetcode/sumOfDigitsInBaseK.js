// Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.

// After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.

const sumBase = (n, k) => [...n.toString(k)].reduce((acc,v)=>+acc + +v)


console.log(sumBase(34,6))//9
console.log(sumBase(10,10))//1