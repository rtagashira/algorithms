// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// function findLongestWordLength(str) {
//     let arr = str.split(" ")
//     let wordLengthArr = arr.map((word)=>word.length)
//     return wordLengthArr.reduce((prev,cur)=> cur>prev?cur:prev)
// }

function findLongestWordLength(str) {
    let count = 0
    let arr = str.match(/[a-zA-Z]+/g)
    for (const word of arr) {
        if(count === 0){
            count = word.length
        }else if(word.length>count){
            count = word.length
        }
    }
    return count
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog."))