// You are given a string s consisting of lowercase English letters, and an integer k.

// First, convert s into an integer by replacing each letter with its position in the alphabet (i.e., replace 'a' with 1, 'b' with 2, ..., 'z' with 26). Then, transform the integer by replacing it with the sum of its digits. Repeat the transform operation k times in total.

// For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:

// Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
// Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
// Transform #2: 17 ➝ 1 + 7 ➝ 8
// Return the resulting integer after performing the operations described above.

const getLucky = (s, k) =>{
    let str = ''
    let sum = 0
    for(let char of s){
        let code = char.charCodeAt() - 96
        str += code.toString()
    }
    for(let i=0;i<k;i++){
        for(let char of str){
            sum += +char
        }
        str = sum.toString()
        sum = 0
    }
    return +str
}

console.log(getLucky(s = "iiii", k = 1))//36
console.log(getLucky(s = "leetcode", k = 2))//6
console.log(getLucky(s = "zbax", k = 2))//8