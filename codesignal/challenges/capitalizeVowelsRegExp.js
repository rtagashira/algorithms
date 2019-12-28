// Given a string, capitalize each lowercase vowel (a, e, i, o, u, y) in it.

let capitalizeVowelsRegExp = (str) => str.replace(/[aeiouy]/g, (x)=>x.toUpperCase())

// let capitalizeVowelsRegExp = (str) =>{
//     let newStr = ''
//     for(let letter of str){
//         if(/[aeiouy]/.test(letter)){
//             newStr += letter.toUpperCase()
//         }else{
//             newStr += letter
//         }
//     }
//     return newStr
// }

console.log(capitalizeVowelsRegExp("There are 12 points"))//"ThErE ArE 12 pOInts"
console.log(capitalizeVowelsRegExp(" _Aaaaas 23"))//" _AAAAAs 23"
console.log(capitalizeVowelsRegExp(" a_2"))//" A_2"