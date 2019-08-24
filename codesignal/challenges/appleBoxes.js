// You have k apple boxes full of apples. Each square box of size m contains m × m apples. You just noticed two interesting properties about the boxes:

// The smallest box is size 1, the next one is size 2,..., all the way up to size k.
// Boxes that have an odd size contain only yellow apples. Boxes that have an even size contain only red apples.
// Your task is to calculate the difference between the number of red apples and the number of yellow apples.

function appleBoxes(k) {
  let r = 0, y = 0
  while(k){
    k%2===0? r += k * k: y += k * k
  k--
  }
  return r - y
}

function appleBoxes(k) {
    let r = 0, y = 0
    for(let i=1;i<=k;i++){
      i%2===0? r += i * i: y += i * i
    }
    return r - y
}

console.log(appleBoxes(5))//-15
console.log(appleBoxes(15))//-120
console.log(appleBoxes(36))//666
console.log(appleBoxes(37))//-703