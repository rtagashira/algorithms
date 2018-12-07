// Call two arms equally strong if the heaviest weights they each are able to lift are equal.

// Call two people equally strong if their strongest arms are equally strong(the strongest arm can 
// be both the right and the left), and so are their weakest arms.

// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

//   Example

// For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false.
//   Input / Output

//   [execution time limit]4 seconds(js)

//   [input] integer yourLeft

// A non - negative integer representing the heaviest weight you can lift with your left arm.

// Guaranteed constraints:
// 0 ≤ yourLeft ≤ 20.

// [input] integer yourRight

// A non - negative integer representing the heaviest weight you can lift with your right arm.

// Guaranteed constraints:
// 0 ≤ yourRight ≤ 20.

// [input] integer friendsLeft

// A non - negative integer representing the heaviest weight your friend can lift with his or her left arm.

// Guaranteed constraints:
// 0 ≤ friendsLeft ≤ 20.

// [input] integer friendsRight

// A non - negative integer representing the heaviest weight your friend can lift with his or her right arm.

// Guaranteed constraints:
// 0 ≤ friendsRight ≤ 20.

// [output] boolean

// true if you and your friend are equally strong, false otherwise.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if(yourLeft===yourRight&&friendsLeft===friendsRight&&yourLeft===friendsLeft){
    return true
  }else if(yourLeft!=yourRight&&friendsLeft!=friendsRight){
    let yourStrong = 0
    let yourWeak = 0
    let friendsStrong = 0
    let friendsWeak = 0
    if(yourLeft>yourRight){
      yourStrong = yourLeft
      yourWeak = yourRight
    }else{
      yourStrong = yourRight
      yourWeak = yourLeft
    }
    if(friendsLeft>friendsRight){
      friendsStrong = friendsLeft
      friendsWeak = friendsRight
    }else{
      friendsStrong = friendsRight
      friendsWeak = friendsLeft
    }
    if(yourStrong ===friendsStrong && yourWeak === friendsWeak){
      return true
    }
  }

  return false
}
//-----------------------------------------------------------------------------------------
function areEquallyStrong2(yourLeft, yourRight, friendsLeft, friendsRight) {
  return yourLeft + yourRight === friendsLeft + friendsRight && (yourLeft === friendsLeft || yourLeft === friendsRight);
}

console.log(areEquallyStrong(10,15,15,10))//true
console.log(areEquallyStrong(15,10,15,10))//true
console.log(areEquallyStrong(15,10,15,9))//false
