// You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.

const sumOfTwo = (a, b, v) =>{
    const set = new Set(b)
    for(let n of a){
        let dif = v - n
        if(set.has(dif)) return true
    }
    return false
}

console.log(sumOfTwo([1, 2, 3],[10, 20, 30, 40],42))//true
console.log(sumOfTwo([1, 2, 3],[10, 20, 30, 40],50))//false