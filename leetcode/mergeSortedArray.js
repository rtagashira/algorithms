// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

const merge = (nums1, m, nums2, n) =>{
    let length = m + n
    let i = 0
    let j = 0
    while(i < m || j < n){
        let a = nums1[i]
        let b = nums2[j]
        
        if(i < m && j < n){
            if(b <= a){
                nums1.splice(i,0,b)
                j++
                i++
                m++
            }else{
                i++
            }
        }else if(j < n){
            if(i >= m){
                nums1[i] = b
                j++
                i++
            }
        }else if(i < m){
            i++
        }
    }
    if(nums1.length > length) nums1.splice(length, nums1.length - length)
    return nums1
}

console.log(merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3))//[1, 2, 2, 3, 5, 6]
console.log(merge(nums1 = [1], m = 1, nums2 = [], n = 0))//[1]