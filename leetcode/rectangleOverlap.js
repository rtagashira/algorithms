// A rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) are the coordinates of its bottom-left corner, and (x2, y2) are the coordinates of its top-right corner.

// Two rectangles overlap if the area of their intersection is positive.  To be clear, two rectangles that only touch at the corner or edges do not overlap.

// Given two (axis-aligned) rectangles, return whether they overlap.

const isRectangleOverlap = (r1, r2) =>{
    if(r1[0] === r1[2] || r1[1] === r1[3] || r2[0] === r2[2] || r2[1] === r2[3]) return false
    if(r2[0] < r1[0]) [r1,r2] = [r2,r1]
    if(r2[0] < r1[2]){ 
        if(r2[1] === r1[1]) return r2[3] > r2[1]
        if(r2[3] === r1[3]) return r2[1] < r2[3]
        if(r2[0] === r1[0]) return r2[1] < r2[3]
        return (r2[1] < r1[3] && r2[1] > r1[1]) || (r2[3] < r1[3] && r2[3] > r1[1]) || (r2[1] < r1[1] && r2[3] > r1[1])
    }else{
        return false
    }
}

console.log(isRectangleOverlap([0,0,2,2], [1,1,3,3]))//true
console.log(isRectangleOverlap([0,0,1,1], [1,0,2,1]))//false
console.log(isRectangleOverlap([-5,8,0,8],[-5,4,5,5]))//false
console.log(isRectangleOverlap([-9,6,-3,10], [-8,-10,-5,-4]))//false
console.log(isRectangleOverlap([7,8,13,15], [10,8,12,20]))//true
console.log(isRectangleOverlap([2,17,6,20], [3,8,6,20]))//true
console.log(isRectangleOverlap([4,4,14,7], [4,3,8,8]))//true
console.log(isRectangleOverlap([-7,-3,10,5], [-6,-5,5,10]))//true
console.log(isRectangleOverlap([-9,6,-3,10],[-8,-10,-5,-4]))//false