// Given two integers L and R, find the count of numbers in the range [L, R] (inclusive) having a prime number of set bits in their binary representation.

// (Recall that the number of set bits an integer has is the number of 1s present when written in binary. For example, 21 written in binary is 10101 which has 3 set bits. Also, 1 is not a prime.)

const countPrimeSetBits = (l, r) =>{
    let count = 0
    for(let i=l;i<=r;i++){
        let str = i.toString(2)
        let bitArr = [...str].filter(x=>x==='1')
        if(bitArr.length === 1) continue
        let prime = true
        for(let j=2;j<bitArr.length;j++){
            if(bitArr.length % j === 0){
                prime = false
                break
            }
        }
        if(prime){
            count++
        }
    }
    return count
}

console.log(countPrimeSetBits(6,10))//4
console.log(countPrimeSetBits(10,15))//5
console.log(countPrimeSetBits(244,269))//16