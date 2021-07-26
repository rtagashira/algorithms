// You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

// There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

// Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

const replaceDigits = (s) =>{
    let str = ''
    for(let i=0;i<s.length;i++){
        if(/[0-9]/.test(s[i])){
            let charCode = s[i-1].charCodeAt()
            let newChar = String.fromCharCode(charCode + +s[i])
            str += newChar
        }else{
            str += s[i]
        }
    }
    return str
}
// const replaceDigits = (s) =>{
//     let arr = [...s]
//     for(let i=0;i<arr.length;i++){
//         if(/[0-9]/.test(arr[i])){
//             let charCode = arr[i-1].charCodeAt()
//             let newChar = String.fromCharCode(charCode + +arr[i])
//             arr[i] = newChar
//         }
//     }
//     return arr.join('')
// }

console.log(replaceDigits("a1c1e1"))//"abcdef"
console.log(replaceDigits("a1b2c3d4e"))//"abbdcfdhe"