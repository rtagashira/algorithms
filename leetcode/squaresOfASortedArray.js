// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

const sortedSquares = (a) =>{
    for(let i=0;i<a.length;i++){
        a[i] = a[i] ** 2
    }
    return a.sort((x,y)=>x-y)
}