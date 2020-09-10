// A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc.

// Given a string, check whether it is beautiful.

const isBeautifulString = (str) =>{
    let obj = {}
    for(let l of str){
        obj[l]? obj[l]++ : obj[l] = 1
    }
    for(let i=0;i<str.length;i++){
        let code = str.charCodeAt(i)
        let prev = String.fromCharCode(code - 1)
        if(str[i] === 'a') continue
        if(obj[str[i]] > obj[prev] || obj[prev] === undefined) return false
    }
    return true
}

console.log(isBeautifulString("bbbaacdafe"))//true
console.log(isBeautifulString("aabbb"))//false
console.log(isBeautifulString("bbc"))//false