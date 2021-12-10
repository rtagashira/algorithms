// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

const hammingWeight = (n) => [...n.toString(2)].filter(x=>x==='1').length