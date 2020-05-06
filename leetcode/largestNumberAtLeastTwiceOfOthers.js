// In a given integer array nums, there is always exactly one largest element.

// Find whether the largest element in the array is at least twice as much as every other number in the array.

// If it is, return the index of the largest element, otherwise return -1.

const dominantIndex = (arr) =>{
    let one,
        two,
        index
    if(arr.length === 1) return 0
    for(let i in arr){
        if(arr[i] > one){
            two = one
            one = arr[i]
            index = +i
        }else if(one === undefined){
            one = arr[i]
            index = +i
        }else if(arr[i] > two || two === undefined){
            two = arr[i]
        }
    }
    return one >= 2 * two? index : -1
}

console.log(dominantIndex([1,0]))//0
console.log(dominantIndex([0,1]))//1