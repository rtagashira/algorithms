// Given a string, sort it in decreasing order based on the frequency of characters.

const frequencySort = (s) =>{
    let obj = {}
    for(let l of s){
        obj[l]? obj[l]++ : obj[l] = 1
        
    }
    
    let arr = [...s]
    arr.sort((a,b)=>obj[b]-obj[a])
    let set = new Set(arr)
    let arrSingles = [...set]
    let str = ''
    for(let l of arrSingles){
        str += l.repeat(obj[l])
    }
    
    return str
}

console.log(frequencySort("tree"))//"eert"
console.log(frequencySort("loveleetcode"))//"eeeeoollvtdc"