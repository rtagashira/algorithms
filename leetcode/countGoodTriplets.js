// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.

// Return the number of good triplets.

const countGoodTriplets = (arr, a, b, c) =>{
    let count = 0
    for(let i=0;i<arr.length-2;i++){
        for(let j=i+1;j<arr.length-1;j++){
            for(let k=j+1;k<arr.length;k++){
                if(Math.abs(arr[i]-arr[j])<=a && Math.abs(arr[j]-arr[k])<=b && Math.abs(arr[i]-arr[k])<=c) count++
            }
        }
    }
    return count
}

console.log(countGoodTriplets(arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3))//4
console.log(countGoodTriplets(arr = [1,1,2,2,3], a = 0, b = 0, c = 1))//0