// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

const isAlienSorted = (words, order) =>{
    let obj = {}
    
    for(let i=0;i<order.length;i++){
        obj[order[i]] = i
    }
    
    for(let i=0;i<words.length-1;i++){
        let word1 = words[i]
        let word2 = words[i+1]

        if(word2.indexOf(word1) === 0){
            continue
        }
        
        for(let j=0;j<word1.length;j++){
            if(obj[word1[j]] < obj[word2[j]]){
                break
            }else if(obj[word1[j]] > obj[word2[j]]){
                return false
            }else if(j >= word2.length){
                return false
            }
        }
    }
    return true
}

console.log(isAlienSorted(words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"))//true
console.log(isAlienSorted(words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"))//false
console.log(isAlienSorted(words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"))//false