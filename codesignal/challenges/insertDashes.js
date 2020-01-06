// Transform a given sentence into a new one with dashes between each two consecutive letters.

const insertDashes = (str) => str.replace(/\B/g, '-')

// const insertDashes = (str) => {
//     let final = ''
//     for(let i in str){
//         if(/[a-zA-Z]/.test(str[i]) && /[a-zA-Z]/.test(str[i-1]) && i > 0){
//             final += '-' + str[i]
//         }else{
//             final += str[i]
//         }
//     }
//     return final
// }

// const insertDashes = (str) => {
//     const arr = str.match(/[a-zA-Z]+/g)
//     for(let i in arr){
//         arr[i] = arr[i].split('').join('-')
//     }
//     return arr.join(' ')
// }

console.log(insertDashes("aba caba"))//"a-b-a c-a-b-a"
console.log(insertDashes("x"))//"x"