// Given a string s and a string t, check if s is subsequence of t.

// You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

const isSubsequence = (s, t) =>{
    if(s === '') return true
    let i = 0,
        j = 0
    
    while(j <= t.length - 1){
        if(t[j] === s[i]){
            if(i === s.length - 1) return true
            i++
            j++
        }else{
            j++
        }
    }
    return false
}

console.log(isSubsequence('abc', 'ahbgdc'))//true
console.log(isSubsequence('axc', 'ahbgdc'))//false