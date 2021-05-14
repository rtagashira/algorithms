// Given an array of strings words representing an English Dictionary, return the longest word in words that can be built one character at a time by other words in words.

// If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.

const longestWord = (words) =>{
    words.sort((a,b)=>a.length-b.length)
    let set = new Set()
    let arr = []
//iterate
    // if length is 1, add to set
    // else if it can be built with a string in set, add to set and make an array with the latest strings in it
    for(let word of words){
        let temp1 = word.slice(1)
        let temp2 = word.slice(0,-1)
        if(word.length === 1){
            set.add(word)
            arr.push(word)
        }else if(set.has(temp1) || set.has(temp2)){
            set.add(word)
            if(word.length > arr[arr.length-1].length){
                arr = [word]
            }else if(word.length === arr[arr.length-1].length){
                arr.push(word)
            }
        }
    }
    return arr.sort()[0]
}

console.log(longestWord(["w","wo","wor","worl","world"]))//'world'
console.log(longestWord(["a","banana","app","appl","ap","apply","apple"]))//'apple'
console.log(longestWord(["b","br","bre","brea","break","breakf","breakfa","breakfas","breakfast",
"l","lu","lun","lunc","lunch","d","di","din","dinn","dinne","dinner"]))//'breakfast'