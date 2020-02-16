// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

const subsetsWithDup = (nums) =>{
    let loops = 2 ** nums.length - 1,
        set   = new Set(),
        arr   = []
    
    while(loops >= 0){
        let str = loops.toString(2)
        str = '0'.repeat(nums.length - str.length) + str
        let subStr = '',
            temp  = []
        
        for(let i in str){
            if(+str[i]){
                temp.push(nums[i])
            }
        }
        temp.sort((a,b)=>a-b)
        subStr = temp.join()
        if(!set.has(subStr)){
            arr.push(temp)
            set.add(subStr)
        }
        
        loops--
    }
    return arr
}
// --------------------------------------------------------
// var subsetsWithDup = function(nums) {
//     let prevIndex = 0;
//     nums.sort((a,b)=>a-b);
    
//     let res = [[]];
//     for (let i=0;i<nums.length;i++) {    
//         let l = res.length;
//         for (let j=prevIndex;j<l;j++) res.push([...res[j], nums[i]]);
//         if (nums[i+1] == nums[i]) prevIndex = l;
//         else prevIndex = 0;
//     }
    
//     return res;
    
// }

console.log(subsetsWithDup([1,2,2]))
//[
//     [2],
//     [1],
//     [1,2,2],
//     [2,2],
//     [1,2],
//     []
//   ]
console.log(subsetsWithDup([-1,1,2]))
// [[],[-1],[-1,1],[-1,1,2],[-1,2],[1],[1,2],[2]]
console.log(subsetsWithDup([4,4,4,1,4]))
// [[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]