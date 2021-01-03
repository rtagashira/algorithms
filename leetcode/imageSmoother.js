// Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

const imageSmoother = (arr)=>{
    let arr2 = []
    let dir = [
                    [-1,-1],
                    [-1,0],
                    [-1,1],
                    [0,-1],
                    [0,0],
                    [0,1],
                    [1,-1],
                    [1,0],
                    [1,1]
              ]

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[0].length;j++){
            if(j === 0) arr2.push(new Array(arr[0].length).fill(0))
            let sum = 0
            let num = 0
            for(let d of dir){
                let r = i + d[0]
                let c = j + d[1]
                if(arr[r] && arr[r][c] != undefined){
                    sum += arr[r][c]
                    num++
                }
                arr2[i][j] = Math.floor(sum / num)
            }
        }
    }
    return arr2
}

console.log(imageSmoother([[1,1,1],
                           [1,0,1],
                           [1,1,1]]))
    // [[0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0]]