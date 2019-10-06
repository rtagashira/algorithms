// In the Land Of Chess, bishops don't really like each other. In fact, when two bishops happen to stand on the same diagonal, they immediately rush towards the opposite ends of that same diagonal.

// Given the initial positions (in chess notation) of two bishops, bishop1 and bishop2, calculate their future positions. Keep in mind that bishops won't move unless they see each other along the same diagonal.

let bishopDiagonal = (b1, b2) => {
  //To find a matching diagonal, the vertical and horizontal distance between pieces must be equal
  let first, second
  b1<b2?(first = b1,second = b2):(first = b2,second = b1)
  let firstCode  = first.charCodeAt(0),
    secondCode = second.charCodeAt(0),
    horDiff    = secondCode - firstCode,
    vertDiff   = Math.abs(first[1] - second[1])
  
  if(horDiff !== vertDiff){
    return [first,second]
  }else{
    let posSlope = first[1]<second[1]? true: false,
      hMax     = 'h'.charCodeAt(0),
      hMin     = 'a'.charCodeAt(0)
    if(posSlope){
      let secondDiff = Math.min(hMax - secondCode, 8 - second[1])
        second = String.fromCharCode(secondCode + secondDiff) + (+second[1] + secondDiff)
      let firstDiff = Math.min(firstCode - hMin, first[1] - 1)
      first = String.fromCharCode(firstCode - firstDiff) + (+first[1] - firstDiff)
      return [first,second]
    }else{
      let secondDiff = Math.min(hMax - secondCode, second[1] - 1)
      second = String.fromCharCode(secondCode + secondDiff) + (+second[1] - secondDiff)
      let firstDiff = Math.min(firstCode - hMin, 8 - first[1])
      first = String.fromCharCode(firstCode - firstDiff) + (+first[1] + firstDiff)
      return [first, second]
    }
  }
}

console.log(bishopDiagonal('d7','f5'))//["c8", "h3"]
console.log(bishopDiagonal('d8','b5'))//["b5", "d8"]
console.log(bishopDiagonal('a1','h8'))//["a1", "h8"]
console.log(bishopDiagonal('g3','e1'))//["e1", "h4"]
console.log(bishopDiagonal('b4','e7'))//["a3", "f8"]
console.log(bishopDiagonal('h1','a1'))//["a1", "h1"]