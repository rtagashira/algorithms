// Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.

// A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

// Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.

const findAndReplacePattern = (words, pattern) =>{
    let arr = []
    for(let word of words){
        let obj = {}    // pattern letter : word letter
        let obj2 = {}   // word letter : pattern letter
        let bool = true
        if(word.length <= pattern.length){
            for(let i=0;i<pattern.length;i++){
                if(obj[pattern[i]]){
                    if(word[i] !== obj[pattern[i]]){
                        bool = false
                        break
                    }
                }else{
                    obj[pattern[i]] = word[i]
                }
                
                if(obj2[word[i]]){
                    if(obj2[word[i]] !== pattern[i]){
                        bool = false
                        break
                    }
                }else{
                    obj2[word[i]] = pattern[i]
                }
            }
        }else{
            bool = false
        }
            if(bool) arr.push(word)
    }
    return arr
}

console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"],"abb"))//["mee","aqq"]