// Given two strings s and t which consist of only lowercase letters.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Find the letter that was added in t.

const findTheDifference = (s, t) =>{
    let objS = {},
        objT = {}
    for(let i=0;i<t.length;i++){
        objT[t[i]]? objT[t[i]]++ : objT[t[i]] = 1
        if(i < s.length){
            objS[s[i]]? objS[s[i]]++ : objS[s[i]] = 1
        }
    }
    for(let k in objT){
        if(objT[k] !== objS[k]) return k
    }
}

console.log(findTheDifference('abcd','abcde'))//e