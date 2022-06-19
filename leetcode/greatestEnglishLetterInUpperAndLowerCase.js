// Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.

// An English letter b is greater than another letter a if b appears after a in the English alphabet.

const greatestLetter = (s) =>{
    let arr = []
    let obj = {}
    for(l of s){
        if(l === l.toLowerCase()){
            if(obj[l.toUpperCase()]) arr.push(l.toUpperCase())
            obj[l] = 1
        }else{
            if(obj[l.toLowerCase()]) arr.push(l)
            obj[l] = 1
        }
    }
    if(arr.length > 0){
        arr.sort()
        return arr[arr.length - 1]
    }
    return ''
}

console.log(greatestLetter("lEeTcOdE"))//'E'
console.log(greatestLetter("arRAzFif"))//'R'
console.log(greatestLetter("AbCdEfGhIjK"))//''