// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

const firstUniqChar = (s) =>{
    let set = new Set(),
        multi = new Set()
    for(let char of s){
        if(!set.has(char)){
            set.add(char)
        }else{
            multi.add(char)
        }
    }
    for(let char of set){
        if(!multi.has(char)) return s.indexOf(char)
    }
    return -1
}

// 2x slower
// const firstUniqChar = (s) =>{
//     let set = new Set(),
//         multi = new Set()
//     for(let char of s){
//         if(!set.has(char)){
//             set.add(char)
//         }else{
//             multi.add(char)
//         }
//     }
//     for(let i in s){
//         if(!multi.has(s[i])) return i
//     }
//     return -1
// }

console.log(firstUniqChar('leetcode'))//0
console.log(firstUniqChar('loveleetcode'))//2