// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

// Count and return the number of maximum integers in the matrix after performing all the operations.

const maxCount = (m, n, ops) =>{
    if(ops.length === 0) return m * n
    let a,b
    for(let arr of ops){
        if(a === undefined || arr[0] < a) a = arr[0]
        if(b === undefined || arr[1] < b) b = arr[1]
    }
    return a * b
}

console.log(maxCount(m = 3, n = 3, ops = [[2,2],[3,3]]))//4
console.log(maxCount(m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],
    [3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]))//4
console.log(maxCount(m = 3, n = 3, ops = []))//9