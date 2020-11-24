// You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

// To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

// If k > 0, replace the ith number with the sum of the next k numbers.
// If k < 0, replace the ith number with the sum of the previous k numbers.
// If k == 0, replace the ith number with 0.
// As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

// Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

const decrypt = (arr, k) =>{
    if(k === 0) return arr.map(x=>0)
    let arr2 = []
    for(let i=0;i<arr.length;i++){
        let sum = 0
        if(k > 0){
            let j = i+1 < arr.length? i+1: 0
            let c = k
            while(c > 0){
                sum += arr[j]
                j = j+1 === arr.length? 0 : j+1
                c--
            }
        }else{
            let j = i-1 > -1? i-1: arr.length-1
            let c = -k
            while(c > 0){
                sum += arr[j]
                j = j-1 === -1? arr.length-1 : j-1
                c--
            }
        }
        arr2.push(sum)
    }
    return arr2
}

console.log(decrypt(code = [5,7,1,4], k = 3))//[12,10,16,13]
console.log(decrypt(code = [1,2,3,4], k = 0))//[0,0,0,0]
console.log(decrypt(code = [2,4,9,3], k = -2))//[12,5,6,13]