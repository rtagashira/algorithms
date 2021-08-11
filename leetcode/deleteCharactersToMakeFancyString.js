// A fancy string is a string where no three consecutive characters are equal.

// Given a string s, delete the minimum possible number of characters from s to make it fancy.

// Return the final string after the deletion. It can be shown that the answer will always be unique.

const makeFancyString = (s) =>{
    let last = s[0]
    let count = 1
    let str = s[0]
    for(let i=1;i<s.length;i++){
        if(s[i] === last){
            count++
            if(count < 3) str += s[i]
        }else{
            last = s[i]
            count = 1
            str += s[i]
        }
    }
    return str
}

console.log(makeFancyString("leeetcode"))//"leetcode"
console.log(makeFancyString("aaabaaaa"))//"aabaa"