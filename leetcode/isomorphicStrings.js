// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

const isIsomorphic = (s, t) =>{
    const obj1 = {},
          obj2 = {}
    
    for(let i=0;i<s.length;i++){
        if(obj1[s[i]]){
            if(t[i] !== obj1[s[i]]) return false
        }else{
            obj1[s[i]] = t[i]
            if(obj2[t[i]]){
                if(s[i] !== obj2[t[i]]) return false
            }else{
                obj2[t[i]] = s[i]
            }
        }
    }
    return true
}

console.log(isIsomorphic("egg","add"))//true
console.log(isIsomorphic("foo","bar"))//false
console.log(isIsomorphic("paper","title"))//true
console.log(isIsomorphic("ab","aa"))//false