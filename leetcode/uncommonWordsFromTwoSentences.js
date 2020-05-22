// We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Return a list of all uncommon words. 

// You may return the list in any order.

const uncommonFromSentences = (A, B) =>{
    let obj = {}
    let arr = []
    let arrA = A.split(' ')
    let arrB = B.split(' ')
    for(let x of arrA){
        obj[x]?obj[x]++:obj[x]=1
    }
    for(let x of arrB){
        obj[x]?obj[x]++:obj[x]=1
    }
    for(let key in obj){
        if(obj[key] === 1) arr.push(key)
    }
    return arr
}