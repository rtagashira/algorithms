// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

const hammingDistance = (x, y) =>{
    let n1 = Math.max(x,y),
        n2 = Math.min(x,y),
        str1 = n1.toString(2),
        str2 = '0'.repeat(str1.length - n2.toString(2).length) + n2.toString(2),
        count = 0

    for(let i=0;i<str1.length;i++){
        if(str1[i] !== str2[i]) count++
    }
    return count
}

console.log(hammingDistance(1,4))//2