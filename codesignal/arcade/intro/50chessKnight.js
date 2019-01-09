// Given a position of a knight on the standard chessboard, find the number of
//  different moves the knight can perform.

function chessKnight2(str) {
  let letter = str[0]
  let number = str[1]
  let letters = ['a','b','c','d','e','f','g','h']

  //center squares where knight has the most moves - c3-c6 f3-f6
  if(letters.indexOf(letter)>1 && letters.indexOf(letter)<6 && number>2 && number<7){
    return 8
  }
  // c2-f2 g3-g6 c7-f7 b3-b6 second row border not inlucding the corners
  if(number==2){
    if(letters.indexOf(letter)>1 && letters.indexOf(letter)<6){ //c2-f2
      return 6
    }
  }
  if(letter==='g'){
    if(number>2 && number<7){  //g3-g6
      return 6
    }
  }
  if(number==7){
    if(letters.indexOf(letter)>1 && letters.indexOf(letter)<6){ //c7-f7
      return 6
    }
  }
  if(letter === 'b'){
    if(number>=3 && number<=6){ //b3-b6
      return 6
    }
  }
  // b2,b7,g2,g7 second border corners
  if(str==='b2'||str==='b7'||str==='g2'||str==='g7'){
    return 4
  }
  // outside border leaving out the corners and box next to corners
  // c1-f1,h3-h6,c8-f8,a3-a6
  if(number==1){
    if(letters.indexOf(letter)>1 && letters.indexOf(letter)<6){  //c1-f1
      return 4
    }
  }
  if(letter==='h'){
    if(number>2 && number<7){ //h3-h7
      return 4
    }
  }
  if(number==8){
    if(letters.indexOf(letter)>1 && letters.indexOf(letter)<6){  //c8-f8
      return 4
    }
  }
  if(letter === 'a'){
    if(number>2 && number<7){ //a3-a6
      return 4
    }
  }
  // b1,g1,h2,h7,g8,b8,a7,a2 box next to corners
  if(str === 'b1' ||
     str === 'g1' ||
     str === 'h2' ||
     str === 'h7' ||
     str === 'g8' ||
     str === 'b8' ||
     str === 'a7' ||
     str === 'a2'){
       return 3
  }
  // a1,a8,h1,h8 corners
  if(str ==='a1' || str ==='a8' || str ==='h1' || str ==='h8'){
    return 2
  }
}
//----------------------------------------------------------------------------
function chessKnight3(cell) {
  const chessBoard = [
      [2,3,4,4,4,4,3,2],
      [3,4,6,6,6,6,4,3],
      [4,6,8,8,8,8,6,4],
      [4,6,8,8,8,8,6,4],
      [4,6,8,8,8,8,6,4],
      [4,6,8,8,8,8,6,4],
      [3,4,6,6,6,6,4,3],
      [2,3,4,4,4,4,3,2],
  ]
  
  const x = cell[0].charCodeAt() - 97;
  console.log(x)
  return chessBoard[cell[1] - 1][x]
}

function chessKnight4(cell) {
  let j = 'abcdefgh'.indexOf(cell[0])+1,
  i = cell[1] * 1;
  return [[2,1],[2,-1],[1,2],[1,-2],[-2,1],[-2,-1],[-1,2],[-1,-2]].filter(el => 
      i + el[0] > 0 && i + el[0] <= 8 && 
          j + el[1] > 0 && j + el[1] <= 8
  ).length;
}

function chessKnight(cell){
    
  let charCode = cell[0].charCodeAt()
  let number = parseInt(cell[1])
  let cont = 0
  
  if (charCode - 2 >= 97) {
      if (number - 1 >= 1) cont++
      if (number + 1 <= 8) cont++
  }
  
  if (charCode + 2 <= 104) {
      if (number - 1 >= 1) cont++
      if (number + 1 <= 8) cont++
  }
  
  if (number - 2 >= 1) {
      
      if (charCode - 1 >= 97) cont++
      if (charCode + 1 <= 104) cont++
  }
          
  if (number + 2 <= 8) {
      if (charCode - 1 >= 97) cont++   
      if (charCode + 1 <= 104) cont++
  }
          
  return cont
}
console.log(chessKnight('a1'))//2
console.log(chessKnight('c2'))//6
