// You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.

// Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location. If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.

// The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).

const nearestValidPoint = (x, y, points) =>{
    let index = -1
    let distance
    for(let i=points.length-1;i>=0;i--){
        let pointsx = points[i][0]
        let pointsy = points[i][1]
        if(x === pointsx || y === pointsy){
            let d = Math.abs(x - pointsx) + Math.abs(y - pointsy)
            if(distance === undefined || d <= distance){
                distance = d
                index = i
            }
        }
    }
    return index
}

console.log(nearestValidPoint(x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]))//2
console.log(nearestValidPoint(x = 3, y = 4, points = [[3,4]]))//0
console.log(nearestValidPoint(x = 3, y = 4, points = [[2,3]]))//-1