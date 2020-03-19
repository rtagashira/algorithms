// Given two arrays, write a function to compute their intersection.
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

const intersect = (nums1, nums2) =>{
    const arr = []
    for(let n of nums1){
        let x = nums2.indexOf(n)
        if(x > -1){
            arr.push(n)
            nums2.splice(x,1)
        }
    }
    return arr
}

console.log(intersect([1,2,2,1],[2,2]))//[2,2]
console.log(intersect([4,9,5],[9,4,9,8,4]))//[4,9]