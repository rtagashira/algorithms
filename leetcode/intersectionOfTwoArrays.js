// Given two arrays, write a function to compute their intersection.

const intersection = (nums1, nums2) =>{
    let set2 = new Set(nums2),
        set = new Set()
    for(let num of nums1){
        if(set2.has(num)) set.add(num)
    }
    return [...set]
}

console.log(intersection([1,2,2,1],[2,2]))//[2]