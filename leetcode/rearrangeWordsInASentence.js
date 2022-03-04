// Given a sentence text (A sentence is a string of space-separated words) in the following format:

// First letter is in upper case.
// Each word in text are separated by a single space.
// Your task is to rearrange the words in text such that all words are rearranged in an increasing order of their lengths. If two words have the same length, arrange them in their original order.

// Return the new text following the format shown above.

const arrangeWords = (text) =>{
    let arr = text.split(' ')
    arr.sort((a,b) => a.length - b.length)
    let str = arr.join(' ')
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}