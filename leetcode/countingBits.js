// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

const countBits = (n) =>{
    let arr = []
    for(let i=0;i<=n;i++){
        let str = i.toString(2)
        let oneArr = [...str].filter(x=>x==='1')
        arr.push(oneArr.length)
    }
    return arr
}

console.log(countBits(5))//[0,1,1,2,1,2]