// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

const countCharacters = (words, chars) =>{
    let sum = 0
    
    for(let i=0;i<words.length;i++){
        let word = chars
        for(let j=0;j<words[i].length;j++){
            let l = words[i][j]
            if(word.indexOf(l) < 0){
                break
            }
            if(j === words[i].length - 1){
                sum += words[i].length
            }
            word = word.replace(l,'')
        }
    }
    return sum
}

console.log(countCharacters(["cat","bt","hat","tree"],"atach"))//6
console.log(countCharacters(["hello","world","leetcode"],"welldonehoneyr"))//10