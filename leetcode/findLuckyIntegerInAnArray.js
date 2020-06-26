// Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.

// Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.

const findLucky = (arr) =>{
    let int
    let obj = {}
    //build obj
    for(let i=0;i<arr.length;i++){
        obj[arr[i]] === undefined? obj[arr[i]] = 1: obj[arr[i]]++
    }
    //iterate through obj to find lucky int
    for(let key in obj){
        if(obj[key] === +key){
            if(int === undefined || +key > int) int = +key
        }
    }
    return int || -1
}


console.log(findLucky([1,2,2,3,3,3]))//3
console.log(findLucky([2,2,2,3,3]))//-1
console.log(findLucky([19,12,11,14,18,8,6,6,13,9,8,3,10,10,1,10,5,12,13,13,9]))//1
console.log(findLucky([3,19,18,2,9,4,7,11,15,7,14,10,11,9,8,5,4,14,11,4,16,3,13,
    14,14,15,8,19,3,5,20,15,14,10,16,11,17,20,11,20,15,3,20,5,12,2,15,12,14,16,
    20,17,15,8,18,9,8,5,12,3,5,15,14,10,2,20,20,3,13,9,1,3,16,18,14,16,13,9,18,13,9,3,5,19]))//1