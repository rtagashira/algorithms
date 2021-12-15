// You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.

// Return any such subsequence as an integer array of length k.

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

const maxSubsequence = (nums, k) =>{
    let arr = []
    let min
    let index
    for(let i=0;i<nums.length;i++){
        if(arr.length < k){
            arr.push(nums[i])
            if(!min || nums[i] < min){
                min = nums[i]
                index = i
            }
        }else{
            if(nums[i] > min){
                arr = [...arr.slice(0,index),...arr.slice(index+1)]
                arr.push(nums[i])
                min = Math.min(...arr)
                index = arr.indexOf(min)
            }

        }
    }
    return arr
}

// const maxSubsequence = (nums, k) =>{
//     let sum
//     let arr
//     const helper = (a, temp = [], s = 0) =>{
//         if(temp.length === k){
//             if(!sum || s > sum){
//                 sum = s
//                 arr = temp
//             }
//         }else if(temp.length < k){
//             for(let i=0;i<a.length;i++){
//                 let n = a[i]
//                 let newArr = a.slice(i+1)
//                 let newTemp = [...temp,n]
//                 let newSum = s + n
//                 helper(newArr,newTemp,newSum)
//             }
//         }
//     }
//     helper(nums)
//     return arr
// }

// const maxSubsequence = (nums, k) =>{
//     let sum
//     let arr
//     let loop = parseInt('1'.repeat(nums.length),2)

//     while(loop){
//         let str = loop.toString(2)
//         str = '0'.repeat(nums.length - str.length) + str
//         let ones = [...str].filter(x=>x==='1').length
//         if(ones === k){
//             let s = 0
//             let a = []
//             for(let i=0;i<str.length;i++){
//                 if(str[i] === '1'){
//                     s += nums[i]
//                     a.push(nums[i])
//                 }
//             }
//             if(!sum || s > sum){
//                 sum = s
//                 arr = a
//             }
//         }
//         loop--
//     }
    
//     return arr
// }

console.log(maxSubsequence(nums = [2,1,3,3], k = 2))//[3,3]
console.log(maxSubsequence(nums = [-1,-2,3,4], k = 3))//[-1,3,4]
console.log(maxSubsequence([-35],1))//[-35]