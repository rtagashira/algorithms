// Given alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

// You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.

// Return the reformatted string or return an empty string if it is impossible to reformat the string.

const reformat = (s) =>{
    let letters = s.match(/[a-z]/g) || [],
        numbers = s.match(/[0-9]/g) || [],
        str = '',
        l = letters.length >= numbers.length
    if(letters.length > numbers.length + 1 || numbers.length > letters.length + 1) return ''
    for(let i=0;i<s.length;i++){
        if(l){
            str += letters.shift()
            l = false
        }else{
            str += numbers.shift()
            l = true
        }
    }
    return str
}

console.log(reformat("a0b1c2"))//a0b1c2
console.log(reformat("leetcode"))//''
console.log(reformat("covid2019"))//"c2o0v1i9d"
console.log(reformat("ab123"))//"1a2b3"