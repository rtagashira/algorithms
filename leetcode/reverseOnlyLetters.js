// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

const reverseOnlyLetters = (s) =>{
    let strA = s.match(/[a-z]/ig)
    if(strA === null) return s
    let a   = strA.reverse()
    let arr = []
    for(let l of s){
        if(/[a-z]/i.test(l)){
            arr.push(a.shift())
        }else{arr.push(l)}
    }
    return arr.join('')
}

console.log(reverseOnlyLetters("ab-cd"))//"dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"))//"j-Ih-gfE-dCba"
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"))
                                                      //"Qedo1ct-eeLg=ntse-T!"