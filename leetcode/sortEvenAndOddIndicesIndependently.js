// You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:

// Sort the values at odd indices of nums in non-increasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.
// Sort the values at even indices of nums in non-decreasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.
// Return the array formed after rearranging the values of nums.

const sortEvenOdd = (nums) =>{
    let even = []
    let odd = []
    let arr = []
    for(let i=0;i<nums.length;i++){
        if(i % 2 === 0){
            even.push(nums[i])
        }else{
            odd.push(nums[i])
        }
    }
    even.sort((a,b)=>a-b)
    odd.sort((a,b)=>b-a)
    
    let e = true
    while(even.length || odd.length){
        if(e){
            arr.push(even.shift())
            e = false
        }else{
            arr.push(odd.shift())
            e = true
        }
    }
    return arr
}

console.log(sortEvenOdd([4,1,2,3]))//[2,3,4,1]