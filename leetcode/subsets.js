// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

const subsets = (nums) =>{
    let loop = parseInt('1'.repeat(nums.length), 2)
    let arr = []
    while(loop >= 0){
        let a = []
        let str = loop.toString(2)
        str = '0'.repeat(nums.length - str.length) + str
        for(let i=0;i<str.length;i++){
            if(str[i] === '1') a.push(nums[i])
        }
        arr.push(a)
        loop--
    }
    return arr
}

console.log(subsets([1,2,3]))//[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]