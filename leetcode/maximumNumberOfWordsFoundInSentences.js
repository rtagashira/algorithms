// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

const mostWordsFound = (sentences) =>{
    let count = 0
    for(let sentence of sentences){
        let arr = sentence.split(' ')
        if(arr.length > count) count = arr.length
    }
    return count
}

console.log(mostWordsFound(["alice and bob love leetcode", 
"i think so too", "this is great thanks very much"]))//6