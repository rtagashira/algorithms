// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

const islandPerimeter = (grid) =>{
    let count = 0
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === 1){
                if(grid[i][j-1] !== 1) count++
                if(grid[i][j+1] !== 1) count++
                //land on top row
                if(i > 0){
                    if(grid[i-1][j] !== 1) count++
                }else{
                    count++
                }
                //land on bottom row
                if(i < grid.length - 1){
                    if(grid[i+1][j] !== 1) count++
                }else{
                    count++
                }
            }
        }
    }
    return count
}

console.log(islandPerimeter([
    [0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]]))//16