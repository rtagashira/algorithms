// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

const repeatedSubstringPattern = (s) =>{
    for(let i=1;i<s.length;i++){
        let str = s.slice(0,i)
        if(s === str.repeat(s.length / str.length)) return true
    }
    return false
}

// const repeatedSubstringPattern = (s) =>{
    
//     for(let i=1;i<s.length;i++){
//         let str = s.slice(0,i),
//             string = '',
//             count = 0
//         while(string.length < s.length){
//             string += str
//             count++
//         }
//         if(string === s && count >= 2) return true
//     }
//     return false
// }

console.log(repeatedSubstringPattern('abab'))//true
console.log(repeatedSubstringPattern('aba'))//false
console.log(repeatedSubstringPattern("abcabcabcabc"))//true