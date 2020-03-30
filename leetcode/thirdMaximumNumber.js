// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

const thirdMax = (arr) =>{
    let first,second,third
    for(let num of arr){
        if(num === first || num === second || num === third) continue

        if(first === undefined){
            first = num
        }else if(num > first){
            third = second 
            second = first 
            first = num
        }else if(num > second || second === undefined){
            third = second 
            second = num
        }else if(num > third || third === undefined){
            third = num
        }
    }

    return second !== undefined && third !== undefined? third : first
}

console.log(thirdMax([3,2,1]))//1
console.log(thirdMax([1,2]))//2
console.log(thirdMax([2, 2, 3, 1]))//1