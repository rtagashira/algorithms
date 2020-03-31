// You have been given a string s, which is supposed to be a sentence. However, someone forgot to put spaces between the different words, and for some reason they capitalized the first letter of every word. Return the sentence after making the following amendments:

// Put a single space between the words.
// Convert the uppercase letters to lowercase.

const amendTheSentence = (s) =>{
    let arr = [],
        temp = ''
    
    for(let i=0;i<s.length;i++){
        if(temp === ''){
            temp += s[i].toLowerCase()
        }else if(/[a-z]/.test(s[i])){
            temp += s[i]
        }else if(/[A-Z]/.test(s[i])){
            arr.push(temp)
            temp = s[i].toLowerCase()
        }

        if(i === s.length - 1){
            arr.push(temp)
        }
    }
    return arr.join(' ')
}

// const amendTheSentence = (s) =>{
//     let arr = [],
//         temp = ''
//     for(let i in s){
//         if(temp === ''){
//             temp += s[i].toLowerCase()
//         }else if(/[a-z]/.test(s[i])){
//             temp += s[i]
//         }else if(/[A-Z]/.test(s[i])){
//             arr.push(temp)
//             temp = s[i].toLowerCase()
//         }
        
//         if(i === s.length - 1 + ''){
//             arr.push(temp)
//         }
//     }
//     return arr.join(' ')
// }

console.log(amendTheSentence("CodesignalIsAwesome"))//"codesignal is awesome"
console.log(amendTheSentence("Hello"))//"hello"