// Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

// too slow
const minMoves = (nums) =>{
    let moves = 0
    let max = Math.max(...nums)
    let filter = nums.filter(x=>x === max)
    if(filter.length === nums.length) return 0
    let count = 0

    while(count != nums.length){
        count = 0
        let firstMax = true
        for(let i=0;i<nums.length;i++){
            if(nums[i] === max){
                if(firstMax){
                    count++
                    firstMax = false
                }else{
                    nums[i]++
                    max = nums[i]
                }
            }else{
                nums[i]++
                if(nums[i] === max) count++
            }


        }
        moves++
    }
    return moves
}

console.log(minMoves([1,2,3]))//3