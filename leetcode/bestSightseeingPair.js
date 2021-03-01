// You are given an integer array values where values[i] represents the value of the ith sightseeing spot. Two sightseeing spots i and j have a distance j - i between them.

// The score of a pair (i < j) of sightseeing spots is values[i] + values[j] + i - j: the sum of the values of the sightseeing spots, minus the distance between them.

// Return the maximum score of a pair of sightseeing spots.

const maxScoreSightseeingPair = (arr) =>{
    let total = arr[0] + arr[1] - 1
    let i = 0
    for(let j=1;j<arr.length;j++){
        let temp = arr[i] + arr[j] + i - j
        total = Math.max(temp, total)
        if(arr[j] > arr[i] + i - j) i = j
    }
    
    return total
}

// const maxScoreSightseeingPair = (arr) =>{
//     let x = arr[0] + arr[1] - 1
    
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             let temp = arr[i] + arr[j] + (i - j)
//             if(temp > x) x = temp
//         }
//     }
    
//     return x
// }

console.log(maxScoreSightseeingPair([8,1,5,2,6]))//11
console.log(maxScoreSightseeingPair([1,2]))//2