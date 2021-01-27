// We are given a matrix with R rows and C columns has cells with integer coordinates (r, c), where 0 <= r < R and 0 <= c < C.

// Additionally, we are given a cell in that matrix with coordinates (r0, c0).

// Return the coordinates of all cells in the matrix, sorted by their distance from (r0, c0) from smallest distance to largest distance.  Here, the distance between two cells (r1, c1) and (r2, c2) is the Manhattan distance, |r1 - r2| + |c1 - c2|.  (You may return the answer in any order that satisfies this condition.)

const allCellsDistOrder = (r, c, r0, c0) =>{
    let arr = []

    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
            let d = Math.abs(r0-i) + Math.abs(c0-j)
            arr.push({
                        xy:[i,j],
                        d:d
            })
        }
    }    
    return arr.sort((a,b)=>a.d-b.d).map(obj=>obj.xy)
}

// const allCellsDistOrder = (r, c, r0, c0) =>{
//     let obj = {}

//     for(let i=0;i<r;i++){
//         for(let j=0;j<c;j++){
//             let d = Math.abs(r0-i) + Math.abs(c0-j)
//             let str = i.toString() + ',' + j.toString()
//             obj[str] = d
//         }
//     }
    
//     let arr = Object.keys(obj)
//     arr.sort((a,b)=>obj[a]-obj[b])
//     return arr.map(x=>{
//         let n1 = x.match(/[0-9]+/)[0]
//         let n2 = x.match(/[0-9]+$/)[0]
//         return [+n1,+n2]
//     })
// }

console.log(allCellsDistOrder(R = 1, C = 2, r0 = 0, c0 = 0))//[[0,0],[0,1]]
console.log(allCellsDistOrder(R = 2, C = 2, r0 = 0, c0 = 1))
                                                            //[[0,1],[0,0],[1,1],[1,0]]
console.log(allCellsDistOrder(2,3,1,2))
                                            //[[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]