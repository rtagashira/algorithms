// Given an array of string words. Return all strings in words which is substring of another word in any order. 

// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

const stringMatching = (words) =>{
    let arr = []
    for(let i=0;i<words.length;i++){
        for(let j=0;j<words.length;j++){
            if(j !== i){
                if(words[j].indexOf(words[i]) > -1 && arr.indexOf(words[i]) === -1) arr.push(words[i])
            }
        }
    }
    return arr
}

console.log(stringMatching(["mass","as","hero","superhero"]))//["as","hero"]
console.log(stringMatching(["leetcode","et","code"]))//["et","code"]
console.log(stringMatching(["blue","green","bu"]))//[]