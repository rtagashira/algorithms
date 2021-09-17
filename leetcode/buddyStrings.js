// Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.


// const buddyStrings = (a, b) =>{
//     if(a.length === 2 && b.length === 2){
//         return b === a[1] + a[0]
//     }else if(a.length > 1 && a.length === b.length){
//         let arr = []
//         for(let i=0;i<a.length;i++){
//             if(a[i] != b[i]){
//                 arr.push(i)
//                 if(arr.length > 2) return false
//             }
//         }
//         if(arr.length === 2){
//             if(a[arr[0]] === b[arr[1]] && a[arr[1]] === b[arr[0]]) return true
//         }else if(arr.length === 0){
//             if(a.length != new Set([...a]).size) return true
//         }
//     }
//     return false
// }

const buddyStrings = (a, b) =>{
    if(a.length === 2 && b.length === 2){
        return b === a[1] + a[0]
    }else if(a.length > 1 && a.length === b.length){
        let arr = []
        let dup = false
        let obj = {}
        for(let i=0;i<a.length;i++){
            if(a[i] != b[i]){
                arr.push(i)
                if(arr.length > 2) return false
            }
            if(!dup){
                obj[a[i]]? obj[a[i]]++ : obj[a[i]] = 1
                if(obj[a[i]] > 1) dup = true
            }
        }
        if(arr.length === 2){
            if(a[arr[0]] === b[arr[1]] && a[arr[1]] === b[arr[0]]) return true
        }else if(arr.length === 0){
            if(dup) return true
        }
    }
    return false
}

console.log(buddyStrings(A = "ab", B = "ba"))//true
console.log(buddyStrings(A = "ab", B = "ab"))//false
console.log(buddyStrings(A = "aa", B = "aa"))//true
console.log(buddyStrings(A = "aaaaaaabc", B = "aaaaaaacb"))//true
console.log(buddyStrings(A = "", B = "aa"))//false
console.log(buddyStrings("abab", "abab"))//true