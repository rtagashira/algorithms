// Miss X has only two combs in her possession, both of which are old and miss a tooth or two. She also has many purses of different length, in which she carries the combs. The only way they fit is horizontally and without overlapping. Given teeth' positions on both combs, find the minimum length of the purse she needs to take them with her.

// It is guaranteed that there is at least one tooth at each end of the comb.
// It is also guaranteed that the total length of two strings is smaller than 32.
// Note, that the combs can not be rotated/reversed.

function combs(c1, c2) {
  //compare the smaller comb to the larger one, iterating the larger one to the left one space at a time, pushing the lengths
  //of the passing comb match into the passArr
  let small
  let big
  let passArr = [c1.length + c2.length]
  if(c1.length>c2.length){
    small = [...c2]
    big = [...c1]
  }else{
    small = [...c1]
    big = [...c2]
  }

  big = [...[...small].fill(null),...big,...[...small].fill(null)]
  //iterating the big comb to match against the small comb
  for(let i=0;i<=c1.length+c2.length;i++){
    tempBig = big.slice(i, i + small.length)
    let pass = true
    // iterate to see if the combs fit together
    for(let j=0;j<small.length;j++){
      if(small[j] === '*' && tempBig[j] === '*'){
        pass = false
      }
    }
    if(pass){
      if(big[i] === '.' && big[i+small.length - 1] === '.'){ //smaller inside the larger
        passArr.push(big.length - small.length * 2)
      }else if(big[i+small.length - 1] === '.'){ //smaller overlaps on the left
        passArr.push(big.slice(i).length - small.length)
      }else if(big[i+small.length] === null ){    //smaller overlaps on the right
        passArr.push(big.slice(small.length,i + small.length).length)
      }
      
    }
  }

  return Math.min(...passArr)
}

console.log(combs("*..*","*.*"))//5
console.log(combs("*..*.*","*.***"))//9
console.log(combs("*...*","*.*"))//5