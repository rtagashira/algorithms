// Intermediate Algorithm Scripting: Missing letters

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.


function fearNotLetter(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for(let i in str){
        let alphabetReplaceIndex = alphabet.indexOf(str[i-1]) + 1
        if(i>0){
            if(str[i-1] != alphabet[alphabet.indexOf(str[i])-1]){
                return alphabet[alphabetReplaceIndex]
            }
        }
    }
}

console.log(fearNotLetter("abce"))
console.log(fearNotLetter("abcdefghjklmno"))
console.log(fearNotLetter("stvwx"))
console.log(fearNotLetter("bcdf"))
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))


// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".
// fearNotLetter("bcdf") should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.