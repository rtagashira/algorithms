// For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.

// Given strings sequence and word, return the maximum k-repeating value of word in sequence.

const maxRepeating = (sequence, word) =>{
    let count = 0
    
    for(let i=0;i<sequence.length;i++){
        let str = sequence.slice(i)
        let temp = 0
        let tempWord = word + word
        if(str.indexOf(word) === 0){
            temp = 1
            while(str.indexOf(tempWord) === 0){
                temp++
                tempWord += word
            }
            if(temp > count) count = temp
        }else if(str.indexOf(word) === -1){
            return count
        }
    }
    return count
}

console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba","aaaba"))//5