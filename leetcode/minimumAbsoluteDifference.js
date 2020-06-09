// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

const minimumAbsDifference = (arr) =>{
    let minDif,
        a = []
    arr.sort((a,b)=>a-b)
    //find the minDif
    for(let i=1;i<arr.length;i++){
        if(Math.abs(arr[i] - arr[i-1]) < minDif || minDif === undefined){
            minDif = Math.abs(arr[i] - arr[i-1]) 
        }
    }
    //create pairs
    for(let i=1;i<arr.length;i++){
        if(Math.abs(arr[i] - arr[i-1]) === minDif){
            a.push([arr[i-1],arr[i]])
        }
    }
    return a
}