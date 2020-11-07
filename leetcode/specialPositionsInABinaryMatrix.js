// Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.

// A position (i,j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

const numSpecial = (arr) =>{
    let colSet = new Set()
    let total = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i].filter(x=>x===1).length === 1){
            let index = arr[i].indexOf(1)
            if(!colSet.has(index)){
                colSet.add(index)
                let count = 0
                for(let j=0;j<arr.length;j++){
                    if(arr[j][index] === 1) count++
                }
                if(count === 1) total++
            }
        }
    }
    return total
}

console.log(numSpecial([
    [1,0,0],
    [0,0,1],
    [1,0,0]]))//1
console.log(numSpecial([
    [1,0,0],
    [0,1,0],
    [0,0,1]]))//3
console.log(numSpecial([
    [0,0,0,0,0],
    [1,0,0,0,0],
    [0,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1]]))//3