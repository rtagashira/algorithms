// Given an integer n, return any array containing n unique integers such that they add up to 0.

const sumZero = (n) =>{
    let arr = []
    if(n % 2 === 1) arr.push(0)
    let i = 1
    while(arr.length < n){
        arr.push(i,-i)
        i++
    }
    return arr
}