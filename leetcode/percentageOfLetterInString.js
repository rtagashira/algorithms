// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

const percentageLetter = (s, letter) =>{
    let count = 0
    for(let c of s){
        if(c === letter) count++
    }
    return Math.floor(100 * (count / s.length))
}