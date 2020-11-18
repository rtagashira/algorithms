// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

const frequencySort = (arr) =>{
    let obj = {},
        countObj = {}
    for(let n of arr){
        // key:value pair of integer : frequency
        obj[n]? obj[n]++ : obj[n] = 1
    }
    for(let key in obj){
        // key:value pair of frequency : array of integers
        countObj[obj[key]]? countObj[obj[key]].push(+key): countObj[obj[key]] = [+key]
    }
    let a = Object.keys(countObj)
    a.sort((a,b)=>+a - +b)
    arr = []
    // iterate through an array of the frequencies, repeating loops for multiple integers 
    // of the same frequency
    for(let n of a){
        let count = 0
        let l = countObj[n].length
        if(l > 1){
            countObj[n].sort((a,b)=>b-a)
        }
        while(count < l){
            for(let i=0;i< +n;i++){
                arr.push(countObj[n][0])
            }
            countObj[n].shift()
            count++
        }
    }
    return arr
}

console.log(frequencySort([1,1,2,2,2,3]))//[3,1,1,2,2,2]
console.log(frequencySort([2,3,1,3,2]))//[1,3,3,2,2]
console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1]))//[5,-1,4,4,-6,-6,1,1,1]
console.log(frequencySort([8,-8,2,-8,-5,-3]))//[8,2,-3,-5,-8,-8]