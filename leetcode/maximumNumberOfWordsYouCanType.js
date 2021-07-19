// There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

// Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

const canBeTypedWords = (text, brokenLetters) =>{
    let set = new Set([...brokenLetters])
    let count = 0
    let arr = text.split(' ')
    for(let word of arr){
        let pass = true
        for(let char of word){
            if(set.has(char)){
                pass = false
                break
            }
        }
        if(pass) count++
    }
    return count
}

console.log(canBeTypedWords(text = "hello world", brokenLetters = "ad"))//1
console.log(canBeTypedWords(text = "leet code", brokenLetters = "lt"))//1
console.log(canBeTypedWords(text = "leet code", brokenLetters = "e"))//0