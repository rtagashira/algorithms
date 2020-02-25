// Given an input string, reverse the string word by word.

const reverseWords = (s) => s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')

// const reverseWords = (s) =>{
//     let str = '',
//         temp = ''
    
//     for(let i=0;i<s.length;i++){
//         if(s[i] === ' '){
//             if(temp !== ''){
//                 if(str === ''){
//                     str = temp
//                     temp = ''
//                 }else{
//                     str = temp + ' ' + str
//                     temp = ''
//                 }
//             }
//         }else if(s[i] != ' '){
//             temp += s[i]
//         }

//         if(i === s.length - 1){
//             if(temp != ''){
//                 if(str != ''){
//                     str = temp + ' ' + str
//                 }else{
//                     str = temp
//                 }
//             }
//         }
//     }
//     return str
// }

console.log(reverseWords("the sky is blue"))//"blue is sky the"
console.log(reverseWords("  hello world!  "))//"world! hello"
console.log(reverseWords("a good   example"))//"example good a"