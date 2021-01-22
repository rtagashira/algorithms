// Given an array A of positive lengths, return the largest perimeter of a triangle with non-zero area, formed from 3 of these lengths.

// If it is impossible to form any triangle of non-zero area, return 0.

const largestPerimeter = (arr) =>{
    arr.sort((a,b)=>b-a)
    
    for(let a=0;a<arr.length - 2;a++){
        for(let b=a+1;b<arr.length-1;b++){
            for(let c=b+1;c<arr.length;c++){
                let x = arr[a],
                    y = arr[b],
                    z = arr[c]
                if((x < (y+z)) && (y < (x+z)) && (z < (x+y))) return x + y + z
            }
        }
    }
    return 0
}

console.log(largestPerimeter([2,1,2]))//5
console.log(largestPerimeter([1,2,1]))//0
console.log(largestPerimeter([3,2,3,4]))//10
console.log(largestPerimeter([3,6,2,3]))//8