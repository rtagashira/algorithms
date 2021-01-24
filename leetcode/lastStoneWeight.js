// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

const lastStoneWeight = (arr) =>{
    arr.sort((a,b)=>b-a)
    
    while(arr.length > 1){
        let x = arr.shift()
        let y = arr.shift()
        if(x != y){
            let diff = x - y
            arr.push(diff)
            arr.sort((a,b)=>b-a)
        }
    }
    return arr[0] || 0
}

console.log(lastStoneWeight([2,7,4,1,8,1]))//1