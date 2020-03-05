// Given two strings s and t , write a function to determine if t is an anagram of s.

const isAnagram = (s, t) =>{
    if(s.length !== t.length) return false
    for(let i=0;i<t.length;i++){
        s = s.replace(t[i], '')
    }
    return s.length === 0
}

console.log(isAnagram("anagram","nagaram"))//true
console.log(isAnagram("rat","car"))//false