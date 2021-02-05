// A boomerang is a set of 3 points that are all distinct and not in a straight line.

// Given a list of three points in the plane, return whether these points are a boomerang.

const isBoomerang = (arr) =>{
    arr.sort((a,b)=>a[0]-b[0])

    let a = arr[0]
    let b = arr[1]
    let c = arr[2]
    // dup points
    if(a.join()===b.join()||a.join()===c.join()||b.join()===c.join()) return false

    // x values the same
    if(a[0] === b[0] && a[0] === c[0]) return false
    // y values the same
    if(a[1] === b[1] && a[1] === c[1]) return false
    // diagonal lines
    let slope = (c[1] - a[1]) / (c[0] - a[0])
    if((b[1] - a[1]) / (b[0] - a[0]) === slope) return false
    return true
}

console.log(isBoomerang([[1,1],[2,3],[3,2]]))//true
console.log(isBoomerang([[1,1],[2,2],[3,3]]))//false