// A bit flip of a number x is choosing a bit in the binary representation of x and flipping it from either 0 to 1 or 1 to 0.

// For example, for x = 7, the binary representation is 111 and we may choose any bit (including any leading zeros not shown) and flip it. We can flip the first bit from the right to get 110, flip the second bit from the right to get 101, flip the fifth bit from the right (a leading zero) to get 10111, etc.
// Given two integers start and goal, return the minimum number of bit flips to convert start to goal.

const minBitFlips = (start, goal) =>{
    let count = 0
    let str1 = start.toString(2)
    let str2 = goal.toString(2)
    if(str1.length !== str2.length){
        if(str1.length < str2.length){
            str1 = '0'.repeat(str2.length - str1.length) + str1
        }else{
            str2 = '0'.repeat(str1.length - str2.length) + str2
        }
    }
    for(let i=0;i<str1.length;i++){
        if(str1[i] !== str2[i]) count++
    }
    return count
}