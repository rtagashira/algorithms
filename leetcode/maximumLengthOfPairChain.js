// You are given n pairs of numbers. In every pair, the first number is always smaller than the second number.

// Now, we define a pair (c, d) can follow another pair (a, b) if and only if b < c. Chain of pairs can be formed in this fashion.

// Given a set of pairs, find the length longest chain which can be formed. You needn't use up all the given pairs. You can select pairs in any order.

const findLongestChain = (arr)=>{
    let count = 1

    arr.sort((a,b)=>{
        if(a[1] < b[1]){
            return -1
        }else if(a[1] > b[1]){
            return 1
        }else{
            return 0
        }
    })

    let temp = arr[0]
    for(let el of arr.slice(1)){
        if(el[0] > temp[1]){
            count++
            temp = el
        }
    }
    return count
}

console.log(findLongestChain([[1,2], [2,3], [3,4]]))//2
console.log(findLongestChain([[3,4],[2,3],[1,2]]))//2
console.log(findLongestChain([[-6,9],[1,6],[8,10],
    [-1,4],[-6,-2],[-9,8],[-5,3],[0,3]]))//3