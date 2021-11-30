// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

const countWords = (words1, words2) =>{
    let obj1 = {}
    let obj2 = {}
    let count = 0
    for(let word of words1){
        obj1[word]? obj1[word]++ : obj1[word] = 1
    }
    for(let word of words2){
        obj2[word]? obj2[word]++ : obj2[word] = 1
    }
    let arr = Object.keys(obj1)
    for(let key of arr){
        if(obj1[key] === 1){
            if(obj2[key] === 1) count++
        }
    }
    return count
}

console.log(countWords(words1 = ["leetcode","is","amazing","as","is"],
                                words2 = ["amazing","leetcode","is"]))//2
console.log(countWords(words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]))//0
console.log(countWords(words1 = ["a","ab"], words2 = ["a","a","a","ab"]))//1