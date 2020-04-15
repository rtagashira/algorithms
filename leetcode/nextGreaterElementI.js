// You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

// The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

const nextGreaterElement = (nums1, nums2) =>{
    let arr = []
    
    for(let n of nums1){
        let i = nums2.indexOf(n)
        let num = nums2[i]
        while(num <= n){
            num = nums2[i]
            if(num > n){    
                arr.push(num)
                break
            }
            if(i === nums2.length - 1 && num <= n){
                arr.push(-1)
            }
            i++
        }
    }
    return arr
}

console.log(nextGreaterElement([4,1,2],[1,3,4,2]))//[-1,3,-1]
console.log(nextGreaterElement([2,4],[1,2,3,4]))//[3,-1]