// A substring is a contiguous (non-empty) sequence of characters within a string.

// A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it.

// Given a string word, return the number of vowel substrings in word.

const countVowelSubstrings = (word) =>{
    let count = 0
    let length = 5
    let i = 0

    while(length <= word.length){
        let str = word.slice(i,i+length)
        let set = new Set([...str])
        if(set.size >= 5){
            let pass = true
            for(let char of set){
                if(/[^aeiou]/.test(char)){
                    pass = false
                    break
                }
            }
            if(pass) count++
        }
        
        if(i === word.length - length){
            i = 0
            length++
        }else{
            i++
        }
    }
    return count
}

console.log(countVowelSubstrings("aeiouu"))//2
console.log(countVowelSubstrings("unicornarihan"))//0
console.log(countVowelSubstrings("cuaieuouac"))//7
console.log(countVowelSubstrings("poazaeuioauoiioaouuouaui"))//31
console.log(countVowelSubstrings(
"uieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieao"))
                                //4656