// You are given an array of up to four non-negative integers, each less than 256.

// Your task is to pack these integers into one number M in the following way:

// The first element of the array occupies the first 8 bits of M;
// The second element occupies next 8 bits, and so on.
// Return the obtained integer M.

// Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. 
// For further clarification see the following example.

function arrayPacking2(a) {
  return parseInt(a.map(x=>'0'.repeat(8-x.toString(2).length)+ x.toString(2)).reverse().join(''),2)
}
//-----------------------------------------------------------------------------------------------------
function arrayPacking3(a) {
  ret = 0;
  for(i=0;i<a.length;i++)
      ret+= a[i] << 8*i;
  return ret;
}

function arrayPacking(a) {
  return a.reduce((value, byte, i) => value + byte * Math.pow(256, i));
}


console.log(arrayPacking([24, 85, 0]))//21784
console.log(arrayPacking([187, 99, 42, 43]))//724198331