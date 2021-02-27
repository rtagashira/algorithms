// In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the ith domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

// We may rotate the ith domino, so that A[i] and B[i] swap values.

// Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

// If it cannot be done, return -1.

const minDominoRotations = (a, b) =>{
    let obj = {} // adding i to sets to find if a solution exists
    let objA = {}// frequencies of each num in arr a
    let objB = {}// frequencies of each num in arr b
    let freq = 0
    
    for(let i=0;i<a.length;i++){
        if(obj[a[i]]){
            obj[a[i]].add(i)
        }else{
            obj[a[i]] = new Set([i])
        }
        objA[a[i]]? objA[a[i]]++ : objA[a[i]] = 1
        if(obj[a[i]].size === a.length){
            if(objA[a[i]] > freq) freq = objA[a[i]]
            if(objB[a[i]] > freq) freq = objB[a[i]]
        }
        
        if(obj[b[i]]){
            obj[b[i]].add(i)
        }else{
            obj[b[i]] = new Set([i])
        }
        objB[b[i]]? objB[b[i]]++ : objB[b[i]] = 1
        if(obj[b[i]].size === a.length){
            if(objB[b[i]] > freq) freq = objB[b[i]]
            if(objA[b[i]] > freq) freq = objA[b[i]]
        }
    }

    if(freq === 0){
        return -1
    }else{
        return a.length - freq
    }
}

// const minDominoRotations = (a, b) =>{
//     let obj = {} // adding i to sets to find if a solution exists
//     let arr = []
//     let bool = false
//     let freq = 0
    
//     for(let i=0;i<a.length;i++){
//         if(obj[a[i]]){
//             obj[a[i]].add(i)
//         }else{
//             obj[a[i]] = new Set([i])
//         }
//         if(obj[a[i]].size === a.length){
//             bool = true
//             arr.push(a[i])
//         }
        
//         if(obj[b[i]]){
//             obj[b[i]].add(i)
//         }else{
//             obj[b[i]] = new Set([i])
//         }
//         if(obj[b[i]].size === a.length){
//             bool = true
//             arr.push(b[i])
//         }
//     }

//     if(!bool){
//         return -1
//     }else{
//         for(num of arr){
//             let aLength = a.filter(x=>x===num).length
//             let bLength = b.filter(x=>x===num).length
//             if(aLength > freq) freq = aLength
//             if(bLength > freq) freq = bLength
//         }
//         return a.length - freq
//     }
// }

console.log(minDominoRotations([2,1,2,4,2,2], [5,2,6,2,3,2]))//2
console.log(minDominoRotations([3,5,1,2,3], [3,6,3,3,4]))//-1
console.log(minDominoRotations([1,2,1,1,1,2,2,2],[2,1,2,2,2,2,2,2]))//1
console.log(minDominoRotations([1,2,3,4,6],[6,6,6,6,5]))//1