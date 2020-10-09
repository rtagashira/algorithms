// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

// In one shift operation:

// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.

const shiftGrid = (grid, k) =>{
    let arr = grid.flat(),
        final = []
    while(k){
        arr.unshift(arr.pop())
        k--
    }
    for(let i=0;i<grid.length;i++){
        final.push(arr.slice(0,grid[0].length))
        arr = arr.slice(grid[0].length)
    }
    return final
}

console.log(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]],4))
                                                                           //[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]