// Two strings word1 and word2 are considered almost equivalent if the differences between the frequencies of each letter from 'a' to 'z' between word1 and word2 is at most 3.

// Given two strings word1 and word2, each of length n, return true if word1 and word2 are almost equivalent, or false otherwise.

// The frequency of a letter x is the number of times it occurs in the string.

const checkAlmostEquivalent = (word1, word2) =>{
    let obj1 = {}
    let obj2 = {}
    for(let i=0;i<word1.length;i++){
        obj1[word1[i]]? obj1[word1[i]]++ : obj1[word1[i]] = 1
        obj2[word2[i]]? obj2[word2[i]]++ : obj2[word2[i]] = 1
    }
    for(let key in obj1){
        if(obj2[key]){
            if(Math.abs(obj1[key] - obj2[key]) > 3) return false
        }else{
            if(obj1[key] > 3) return false
        }
    }
    for(let key in obj2){
        if(obj1[key]){
            if(Math.abs(obj1[key] - obj2[key]) > 3) return false
        }else{
            if(obj2[key] > 3) return false
        }
    }
    return true
}

console.log(checkAlmostEquivalent(word1 = "aaaa", word2 = "bccb"))//false
console.log(checkAlmostEquivalent(word1 = "abcdeef", word2 = "abaaacc"))//true
console.log(checkAlmostEquivalent(word1 = "cccddabba", word2 = "babababab"))//true