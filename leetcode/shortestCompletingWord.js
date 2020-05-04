// Find the minimum length word from a given dictionary words, which has all the letters from the string licensePlate. Such a word is said to complete the given string licensePlate

// Here, for letters we ignore case. For example, "P" on the licensePlate still matches "p" on the word.

// It is guaranteed an answer exists. If there are multiple answers, return the one that occurs first in the array.

// The license plate might have the same letter occurring multiple times. For example, given a licensePlate of "PP", the word "pair" does not complete the licensePlate, but the word "supper" does.

const shortestCompletingWord = (plate, words) =>{
    // convert the plate string into only lowercase letters
    let str = plate.match(/[a-z]/ig).join('').toLowerCase()
    // arr receives possible words
    let arr = []
    

    for(let i=0;i<words.length;i++){
        let s = str
        for(let j=0;j<words[i].length;j++){
    //iterate through each word, replacing the matching letters in the plate with ''
            s = s.replace(words[i][j], '')
            
        }
    // if s = '' then it's a possible solution. Put it in the arr based on word length
        if(s === ''){
            if(arr.length > 0){
                if(words[i].length < arr[0].length){
                    arr.unshift(words[i])
                }
            }else{
                arr.push(words[i])
            }
        }
    }
    // return the first word in the array
    return arr[0]
}

console.log(shortestCompletingWord("1s3 PSt",
["step", "steps", "stripe", "stepple"]))//"steps"
console.log(shortestCompletingWord("1s3 456",
["looks", "pest", "stew", "show"]))//"pest"