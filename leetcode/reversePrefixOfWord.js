// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

const reversePrefix = (word, ch) =>{
    let i = word.indexOf(ch)
    return [...word.slice(0,i+1)].reverse().join('') + word.slice(i+1)
}

console.log(reversePrefix(word = "abcdefd", ch = "d"))//"dcbaefd"