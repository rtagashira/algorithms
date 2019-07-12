// Court is in session. We got a group of witnesses who have all taken an oath to tell the truth. The prosecutor is pointing at the defendants one by one and asking each witnesses a simple question - "guilty or not?". The witnesses are allowed to respond in one of the following three ways:

// I am sure he/she is guilty.
// I am sure he/she is innocent.
// I have no idea.
// The prosecutor has a hunch that one of the witnesses might not be telling the truth so she decides to cross-check all of their testimonies and see if the information gathered is consistent, i.e. there are no two witnesses A and B and a defendant C such that A says C is guilty while B says C is innocent.

// (Compare columns looking for presence of both 1 and -1)

function isInformationConsistent(arr) {
  for(let col = 0; col < arr[0].length; col++){
    let one = false
    let negOne = false
    for(let row = 0; row < arr.length; row++){
      let value = arr[row][col]
      if(!one && value === 1) one = true
      if(!negOne && value === -1) negOne = true
      if(one && value === -1) return false
      if(negOne && value === 1) return false
    }
  }
  return true
}

function isInformationConsistent(arr) {
  for(let col = 0; col < arr[0].length; col++){
    let temp = null
    for(let row = 0; row < arr.length; row++){
      let value = arr[row][col]
      if(temp === null){
        if(value === 1 || value === -1){
          temp = value
        }
      }else{
        if(temp === 1){
          if(value === -1){
            return false
          }
        }else if(temp === -1){
          if(value === 1){
            return false
          }
        }
      }
    }
  }
  return true
}

console.log(isInformationConsistent([
  [ 0, 1, 0, 1], 
  [-1, 1, 0, 0], 
  [-1, 0, 0, 1]]))//true
  console.log(isInformationConsistent([
    [ 1, 0], 
    [-1, 0], 
    [ 1, 1],
    [ 1, 1]]))//false