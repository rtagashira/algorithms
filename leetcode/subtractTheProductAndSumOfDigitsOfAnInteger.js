// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

const subtractProductAndSum = (n) =>{
    let str = n.toString()
    let p = 1
    let s = 0
    for(let l of str){
        p *= +l
        s += +l
    }
    return p - s
}

console.log(subtractProductAndSum(234))//15