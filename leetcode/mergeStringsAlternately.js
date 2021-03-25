// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

const mergeAlternately = (word1, word2) =>{
    let str = ''
    let loop = Math.min(word1.length,word2.length)
    
    for(let i=0;i<loop;i++){
        str += word1[i]
        str += word2[i]
    }
    
    if(word1.length > loop){
        return str + word1.slice(loop)
    }else if(word2.length > loop){
        return str + word2.slice(loop)
    }else{
        return str
    }
}