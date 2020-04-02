// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

const findDisappearedNumbers = (nums) =>{
    let set = new Set(nums),
        arr = []
    for(let i=1;i<=nums.length;i++){
        if(!set.has(i)) arr.push(i)
    }
    return arr
}

// const findDisappearedNumbers = (nums) =>{
//     let set = new Set()
//     for(let i=1;i<=nums.length;i++){
//         set.add(i)
//     }
//     for(let n of nums){
//         if(set.has(n)) set.delete(n)
//     }
//     return [...set]
// }

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))//[5,6]