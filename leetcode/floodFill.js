// An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

// Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

// To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

// At the end, return the modified image.

const floodFill = (image, sr, sc, newColor)=>{
    let arr = []
    let set = new Set() //to keep track of visited spots
    for(let i=0;i<image.length;i++){
        arr.push([])
        for(let j=0;j<image[0].length;j++){
            arr[i].push(image[i][j])
        }
    }
    let dirs = [
                 [0,-1],
                 [0,1],
                 [-1,0],
                 [1,0]
               ]
    let flood = (x,y)=>{
        let oldColor = image[sr][sc]
        let str = x.toString() + ',' + y.toString()
        set.add(str)
        if(image[x][y] === oldColor){
            arr[x][y] = newColor
        }
        for(let d of dirs){
            let r = x + d[0]
            let c = y + d[1]
            let s = r.toString() + ',' + c.toString()
            if(image[r] && image[r][c] != undefined){
                if(!set.has(s) && image[r][c] === oldColor) flood(r,c)
            }
        }
    }

    flood(sr,sc)
    return arr
}

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]],
    sr = 1, sc = 1, newColor = 2))
                                                 //[[2,2,2],[2,2,0],[2,0,1]]