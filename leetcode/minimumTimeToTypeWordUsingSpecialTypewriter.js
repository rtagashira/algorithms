// There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a circle with a pointer. A character can only be typed if the pointer is pointing to that character. The pointer is initially pointing to the character 'a'.


// Each second, you may perform one of the following operations:

// Move the pointer one character counterclockwise or clockwise.
// Type the character the pointer is currently on.
// Given a string word, return the minimum number of seconds to type out the characters in word.

const minTimeToType = (word) =>{
    let time = 0
    let pos = 'a'.charCodeAt()
    for(let char of word){
        let code = char.charCodeAt()
        let dif = Math.abs(pos - code)
        if(dif > 13) dif = 26 - dif
        time += dif
        pos = code
        time++
    }
    return time
}

console.log(minTimeToType("abc"))//5
console.log(minTimeToType("bza"))//7
console.log(minTimeToType("zjpc"))//34