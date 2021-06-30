// The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).

// The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.

// For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.
// You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.

// Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.

const isSumEqual = (firstWord, secondWord, targetWord) =>{
    let alpha = 'abcdefghij'
    let first = [...firstWord].map(x=>alpha.indexOf(x)).join('')
    let second = [...secondWord].map(x=>alpha.indexOf(x)).join('')
    let target = [...targetWord].map(x=>alpha.indexOf(x)).join('')
    return +first + +second === +target
}

console.log(isSumEqual(firstWord = "acb", secondWord = "cba", targetWord = "cdb"))//true
console.log(isSumEqual(firstWord = "aaa", secondWord = "a", targetWord = "aab"))//false
console.log(isSumEqual(firstWord = "aaa", secondWord = "a", targetWord = "aaaa"))//true