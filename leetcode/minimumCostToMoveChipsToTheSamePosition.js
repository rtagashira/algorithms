// We have n chips, where the position of the ith chip is position[i].

// We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:

// position[i] + 2 or position[i] - 2 with cost = 0.
// position[i] + 1 or position[i] - 1 with cost = 1.
// Return the minimum cost needed to move all the chips to the same position.

const minCostToMoveChips = (arr) =>{
    let obj = {
                even:0,
                odd:0
              }
    for(let n of arr){
        if(n % 2 === 0){
            obj.even++
        }else{
            obj.odd++
        }
    }
    return Math.min(obj.even,obj.odd)
}

console.log(minCostToMoveChips([2,2,2,3,3]))//2