// Given an integer n. Each number from 1 to n is grouped according to the sum of its digits. 

// Return how many groups have the largest size.

const countLargestGroup = (n) =>{
    const obj = {}
    const add = num => +[...num.toString()].reduce((acc,v)=>+acc + +v)
    let size,
        count = 0
    for(let i=1;i<=n;i++){
        let sum = add(i)
        if(obj[sum]){
            obj[sum].push(i)
        }else{
            obj[sum] = [i]
        }
    }
    for(let key in obj){
        if(size === undefined || obj[key].length > size){
            size = obj[key].length
            count = 1
        }else if(obj[key].length === size){
            count++
        }
    }
    return count
}

console.log(countLargestGroup(13))//4
console.log(countLargestGroup(2))//2
console.log(countLargestGroup(15))//6
console.log(countLargestGroup(24))//5