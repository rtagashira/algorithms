// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

const singleNumber = (nums) =>{
    const set = new Set()
    for(let n of nums){
        if(set.has(n)) set.delete(n)
        else set.add(n)
    }
    return [...set]
}

console.log(singleNumber([1,2,1,3,2,5]))//[3,5]