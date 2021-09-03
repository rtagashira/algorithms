// You are given a 2D integer array ranges and two integers left and right. Each ranges[i] = [starti, endi] represents an inclusive interval between starti and endi.

// Return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges. Return false otherwise.

// An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.

const isCovered = (arr, l, r) =>{
    let set = new Set()
    for(let i=l;i<=r;i++){
        set.add(i)
    }
    
    for(let range of arr){
        if(l <= range[1] || r >= range[0]){
            for(let n of set){
                if(n >= range[0] && n<= range[1]) set.delete(n)
            }
        }
        if(set.size === 0) return true
    }
    return false
}

// const isCovered = (arr, l, r) =>{
//     let a = []
//     let set = new Set()
//     for(let i=l;i<=r;i++){
//         a.push(i)
//     }
    
//     for(let range of arr){
//         if(l <= range[1] || r >= range[0]){
//             for(let n of a){
//                 if(n >= range[0] && n<= range[1]) set.add(n)
//             }
//         }
//         if(a.length === set.size) return true
//     }
//     return false
// }

console.log(isCovered([[1,2],[3,4],[5,6]], left = 2, right = 5))//true
console.log(isCovered(ranges = [[1,10],[10,20]], left = 21, right = 21))//false