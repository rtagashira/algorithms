// Three stones are on a number line at positions a, b, and c.

// Each turn, you pick up a stone at an endpoint (ie., either the lowest or highest position stone), and move it to an unoccupied position between those endpoints.  Formally, let's say the stones are currently at positions x, y, z with x < y < z.  You pick up the stone at either position x or position z, and move that stone to an integer position k, with x < k < z and k != y.

// The game ends when you cannot make any more moves, ie. the stones are in consecutive positions.

// When the game ends, what is the minimum and maximum number of moves that you could have made?  Return the answer as an length 2 array: answer = [minimum_moves, maximum_moves]

const numMovesStones = (a, b, c) =>{
    let arr = [a,b,c]
    arr.sort((a,b)=>a-b)

    let firstGap = arr[1]-arr[0]
    let secondGap = arr[2]-arr[1]
    let gap
    let l 
    let h
    let x
    let min 
    let max = 0
    
    if(firstGap === 1 && secondGap === 1) return [0,0]

    // finding min
    if(firstGap < secondGap){
        l = arr[0]
        h = arr[1]
        x = arr[2]
        gap = firstGap
    }else{
        l = arr[1]
        h = arr[2]
        x = arr[0]
        gap = secondGap
    }
    if(gap <= 2){
        min = 1
    }else{
        min = 2
    }
    // finding max
    //moving the endpoint of the larger gap
    if(x < l){//if the larger gap is between the 1st and 2nd
        //moving x to l-1 spot
        max += l-x-1
        if(l === h - 2){
            //moving x to between l and h
            max++
        }else if(l < h - 2){
            max++ // moving x to h-1 spot
            max += (h-1) - l - 1 //moving l to x-1 spot
        }
    }else{
    //if the larger gap is between the 2nd and 3rd
        max += x-h-1
        if(h === l+2){
            max++
        }else if(h > l + 2){
            max++
            max += h - (l+1) - 1
        }
    }
    return [min,max]
}

console.log(numMovesStones(a = 1, b = 2, c = 5))//[1,2]
console.log(numMovesStones(a = 4, b = 3, c = 2))//[0,0]
console.log(numMovesStones(a = 3, b = 5, c = 1))//[1,2]