// Given an array of integers, we need to fill in the "holes" such that it contains all the integers from some range.

const makeArrayConsecutive = (arr) =>{
    let final = []
    for(let i=Math.min(...arr);i<Math.max(...arr);i++){
        if(arr.indexOf(i) < 0) final.push(i)
    }
    return final
}

console.log(makeArrayConsecutive([6, 2, 3, 8]))//[4, 5, 7]
console.log(makeArrayConsecutive([-1, -3]))//[-2]
console.log(makeArrayConsecutive([5, 4, 6]))//[]
console.log(makeArrayConsecutive([-1, 3]))//[0, 1, 2]