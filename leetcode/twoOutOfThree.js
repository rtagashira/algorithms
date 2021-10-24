// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

const twoOutOfThree = (nums1, nums2, nums3) =>{
    let obj1 = {}
    let obj2 = {}
    let obj3 = {}
    let set = new Set()
    for(let i=0;i<Math.max(nums1.length,nums2.length,nums3.length);i++){
        if(i < nums1.length){
            if(!obj1[nums1[i]]) obj1[nums1[i]] = 1
            if(obj2[nums1[i]] || obj3[nums1[i]]) set.add(nums1[i])
        }
        if(i < nums2.length){
            if(!obj2[nums2[i]]) obj2[nums2[i]] = 1
            if(obj1[nums2[i]] || obj3[nums2[i]]) set.add(nums2[i])
        }
        if(i < nums3.length){
            if(!obj3[nums3[i]]) obj3[nums3[i]] = 1
            if(obj2[nums3[i]] || obj1[nums3[i]]) set.add(nums3[i])
        }
    }
    return [...set]
}

console.log(twoOutOfThree(nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]))//[3,2]
console.log(twoOutOfThree(nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]))//[2,3,1]
console.log(twoOutOfThree(nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]))//[]