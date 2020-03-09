// You are given a string s that consists of only lowercase English letters. If vowels ('a', 'e', 'i', 'o', and 'u') are given a value of 1 and consonants are given a value of 2, return the sum of all of the letters in the input string.

const countVowelConsonant = (s) => [...s].reduce((acc,v)=> /[aeiou]/.test(v)? acc + 1 : acc + 2, 0)

// const countVowelConsonant = (s) => [...s].reduce((acc,v)=>{
//     if(/[aeiou]/.test(v)){
//         return acc + 1
//     }else{
//         return acc + 2
//     }
// },0)

// const countVowelConsonant = (s) =>{
//     let sum = 0
//     for(let l of s){
//         if(/[aeiou]/.test(l)){
//             sum++
//         }else{
//             sum += 2
//         }
//     }
//     return sum
// }

console.log(countVowelConsonant('a'))//1
console.log(countVowelConsonant("abcde"))//8
console.log(countVowelConsonant(""))//0
console.log(countVowelConsonant("oqaawtnkqo"))//16
console.log(countVowelConsonant("qrkwwqawbxgaasksrfpacpwhfobgfh"))//55