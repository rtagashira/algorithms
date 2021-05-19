// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

const checkStraightLine = (arr) =>{
    let slope
    arr.sort((a,b)=>a[1]-b[1])
    for(let i=1;i<arr.length;i++){
        let s = (arr[i][1] - arr[i-1][1]) / (arr[i][0] - arr[i-1][0])
        if(slope === undefined){
            slope = s
        }else{
            if(slope !== s) return false
        }
    }
    return true
}

console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]))//true
console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]))//false