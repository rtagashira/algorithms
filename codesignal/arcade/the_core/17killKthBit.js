// Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
// In order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent to his minions. 
// The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky 
// blocking out the sun, and making all the people on Earth grumpy and sad.

// You figured out that some numbers have a modified single digit in their binary representation. 
// More specifically, in the given number n the kth bit from the right was initially set to 0, but its 
// current value might be different. It's now up to you to write a function that will change the kth bit of n back to 0.

function killKthBit(n, k) {
  return n.toString(2).split('').reverse()[k-1]==='1'?n-(parseInt('1'+'0'.repeat(k-1),2)):n ;
}
//------------------------------------------------------------------------------------------------
function killKthBit(n, k) {
  return n & ~(1 << k - 1);
}


console.log(killKthBit(37,3))//33
console.log(killKthBit(37,4))//37