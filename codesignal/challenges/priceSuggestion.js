// When a customer submits a job request on Thumbtack, this information is sent to Pros in the area who might be interested in it. If it looks like there's a fit, a Pro can respond with a custom quote that includes a personal message and a price estimate.

// Thumbtack tries to help Pros pick a price estimate range using historical contractData, which contains prices for the same job type in the same area. You have been asked to implement the following two-step price suggestion algorithm:

// In the first step, contractData, which is guaranteed to have an even length, is sorted and divided into two groups:
// the first group contains the first half of the elements in contractData.
// the second group contains the other half;
// In the second step, the median values of the first and the second groups are found:
// the median of the first group is rounded down and returned as the lower price bound;
// the median of the second group is rounded up and returned as the upper price bound.
// If the data is insufficient (i.e. contractData contains fewer than 2 elements), a suggestion cannot be made, so nothing should be returned.
// Using the given contractData, find the lower and the upper bounds of the suggested price estimate range.

function priceSuggestion(arr) {
    if(arr.length<2) return []
    arr.sort((a,b)=>a-b)
    let arr1 = arr.slice(0,arr.length/2)
    let arr2 = arr.slice(arr.length/2)
    let m1
    let m2

    if(arr1.length % 2 === 0){
        let sum = arr1[arr1.length/2] + arr1[(arr1.length/2)-1]
        m1 = sum/2
    }else{
        m1 = arr1[Math.floor(arr1.length/2)]
    }
    
    if(arr2.length % 2 === 0){
        let sum = arr2[arr2.length/2] + arr2[(arr2.length/2)-1]
        m2 = sum/2
    }else{
        m2 = arr2[Math.floor(arr2.length/2)]
    }
    
    return [Math.floor(m1),Math.ceil(m2)]
}

console.log(priceSuggestion([1, 5, 6, 3, 2, 4, 7, 8]))//[2, 7]