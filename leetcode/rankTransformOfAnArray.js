// Given an array of integers arr, replace each element with its rank.

// The rank represents how large the element is. The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.

const arrayRankTransform = (arr) =>{
    let obj = {}
    let rank = 1
    let a = []
    let sort = [...arr].sort((a,b)=>a-b)
    for(let i=0;i<arr.length;i++){
        if(obj[sort[i]] === undefined){
            obj[sort[i]] = rank
            rank++
        }
    }
    for(let i=0;i<arr.length;i++){
        a.push(obj[arr[i]])
    }
    return a
}

// const arrayRankTransform = (arr) =>{
//     let set = new Set(arr)
//     let sort = [...set].sort((a,b)=>a-b)
//     return arr.map(x=>sort.indexOf(x) + 1)
// }

console.log(arrayRankTransform([40,10,20,30]))//[4,1,2,3]
console.log(arrayRankTransform([100,100,100]))//[1,1,1]
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]))//[5,3,4,2,8,6,7,1,3]