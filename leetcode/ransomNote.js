// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

const canConstruct = (ransomNote, magazine) =>{
    let obj = {}
    for(l of magazine){
        obj[l]? obj[l]++ : obj[l] = 1
    }
    for(let l of ransomNote){
        if(obj[l]){
            obj[l]--
        }else{
            return false
        }
    }
    return true
}

console.log(canConstruct(ransomNote = "a", magazine = "b"))//false
console.log(canConstruct(ransomNote = "aa", magazine = "aab"))//true