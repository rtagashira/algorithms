// Given a string, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = (s) =>{
    let l = 0
    for(let i=0;i<s.length;i++){
        let obj = {}
            c   = 0
        for(let j=i;j<s.length;j++){
           if(obj[s[j]]){
               break
           }else{
               obj[s[j]] = 1
               c++
           }
        }
        if(c > l) l = c
    }
    return l
};

console.log(lengthOfLongestSubstring("abcabcbb"))//3
console.log(lengthOfLongestSubstring("bbbbb"))//1
console.log(lengthOfLongestSubstring("pwwkew"))//3