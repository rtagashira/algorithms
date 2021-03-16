// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

const countConsistentStrings = (allowed, words) =>{
    let count = 0
    let set = new Set([...allowed])
    for(let word of words){
        let pass = true
        for(let char of word){
            if(!set.has(char)) pass = false
        }
        if(pass) count++
    }
    return count
}