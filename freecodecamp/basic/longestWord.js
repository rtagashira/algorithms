// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
    let arr = str.split(" ")
    let wordLengthArr = arr.map((word)=>word.length)
    return wordLengthArr.reduce((prev,cur)=> cur>prev?cur:prev)
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
