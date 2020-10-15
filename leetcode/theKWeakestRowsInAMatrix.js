// Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians), return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.

// A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j, or they have the same number of soldiers but i is less than j. Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.

const kWeakestRows = (mat, k) =>{
    let map = mat.map((x,i)=>[x.filter(a=>a===1).length,i])
    map.sort((a,b)=>{
        if(a[0]<b[0]){
            return -1
        }else if(b[0]<a[0]){
            return 1
        }else{
            if(a[1]<b[1]){
                return -1
            }else{
                return 1
            }
        }
    })
    return map.slice(0,k).map(x=>x[1])
}

console.log(kWeakestRows(
    [[1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]], 
   k = 3))//[2,0,3]
console.log(kWeakestRows(
    [[1,0,0,0],
    [1,1,1,1],
    [1,0,0,0],
    [1,0,0,0]], 
   k = 2))//[0,2]