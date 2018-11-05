// Return an array consisting of the largest number from each provided sub-array. 
// For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    return arr.map((arr2)=>arr2.reduce((prev,cur)=>cur>prev?cur:prev))
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))



function largestOfFour2(arr) {
    let newArr = []
    for(let i=0;i<arr.length;i++){
        newArr.push(
            arr[i].reduce((prev,cur)=>cur>prev?cur:prev)
        )
    }
    return newArr
}

console.log(largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


function largestOfFour3(arr) {
    return arr.reduce((acc,cur,index,array)=>{
        let value = 0
        for (const num of cur) {
            if(num>value){
                value = num
            }
        }
        acc.push([value])
        return acc
    },[])
}

console.log(largestOfFour3([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))


function largestOfFour4(arr) {
    return arr.reduce((acc,cur,index,array)=>{
        acc.push(cur.reduce((acc,cur)=> cur>acc?cur:acc))
        return acc
    },[])
}

console.log(largestOfFour4([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))