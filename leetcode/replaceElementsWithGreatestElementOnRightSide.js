// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

const replaceElements = (arr) =>{
    let a = [],
    g
    for(let i=arr.length - 1;i>0;i--){
        if(g === undefined || arr[i]>g){
            g = arr[i]
        }
        a.unshift(g)
    }
    return [...a,-1]
}

// const replaceElements = (arr) =>{
//     let a = []
//     for(let i=1;i<arr.length;i++){
//         a.push(Math.max(...arr.slice(i)))
//     }
//     a.push(-1)
//     return a
// }

console.log(replaceElements([17,18,5,4,6,1]))//[18,6,6,6,1,-1]