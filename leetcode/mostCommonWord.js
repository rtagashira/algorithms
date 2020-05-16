// Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

// Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

const mostCommonWord = (paragraph, banned) =>{
    let obj = {},
        set = new Set(banned),
        w,
        freq = 0

    paragraph = paragraph.trim()
    let arr = paragraph.split(' ')

    for(let i=0;i<arr.length;i++){
        let word = arr[i].toLowerCase().match(/\w+/)[0]
        if(!set.has(word)){
            obj[word]? obj[word]++ : obj[word] = 1
            if(obj[word] > freq){
                freq = obj[word]
                w = word
            }
        }
    }
    return w
}

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.",["hit"]))//"ball"
console.log(mostCommonWord(
    "Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. ",["hit"]))
    //ball