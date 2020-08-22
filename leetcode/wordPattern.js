// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

const wordPattern = (pattern, str) =>{
    let strArr = str.split(' '),
        obj = {}
    if(pattern.length !== strArr.length) return false
    for(let i=0;i<pattern.length;i++){
        if(obj[pattern[i]]){
            if(strArr[i] !== obj[pattern[i]]) return false
        }else{
            obj[pattern[i]] = strArr[i]
        }
    }
    let values = Object.values(obj)
    if(new Set(values).size !== Object.keys(obj).length) return false
    return true
}

console.log(wordPattern('abba','dog cat cat dog'))//true
console.log(wordPattern('abba','dog cat cat fish'))//false
console.log(wordPattern('aaaa','dog cat cat dog'))//false
console.log(wordPattern('abba','dog dog dog dog'))//false