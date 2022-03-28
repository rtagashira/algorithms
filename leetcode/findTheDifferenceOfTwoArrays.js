// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

const findDifference = (nums1, nums2) =>{
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let arr1 = []
    let arr2 = []
    for(let n of set1){
        if(!set2.has(n)) arr1.push(n)
    }
    for(let n of set2){
        if(!set1.has(n)) arr2.push(n)
    }
    return [arr1,arr2]
}

console.log(findDifference(nums1 = [1,2,3,3], nums2 = [1,1,2,2]))//[[3],[]]