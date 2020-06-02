// Students are asked to stand in non-decreasing order of heights for an annual photo.

// Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

// Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

const heightChecker = (heights) =>{
    let sort = [...heights].sort((a,b)=>a-b),
        count = 0
    for(let i=0;i<sort.length;i++){
        if(sort[i] !== heights[i]) count++
    }
    return count
}

console.log(heightChecker([1,1,4,2,1,3]))//3
console.log(heightChecker([5,1,2,3,4]))//5
console.log(heightChecker([1,2,3,4,5]))//0