// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

const generateTheString = (n) =>{
    i = 97
    if(n % 2 === 0){
        return String.fromCharCode(i).repeat(n - 1) + String.fromCharCode(i+1)
    }else{
        return String.fromCharCode(i).repeat(n)
    }
}

console.log(generateTheString(2))//'xy'
console.log(generateTheString(3))//'aaa'
console.log(generateTheString(4))//'pppz'
console.log(generateTheString(99))