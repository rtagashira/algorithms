// John has always had trouble remembering chess game positions. To help himself with remembering, he decided to store game positions in strings. He came up with the following position notation:

// The notation is built for the current game position row by row from top to bottom, with '/' separating each row notation;
// Within each row, the contents of each square are described from the leftmost column to the rightmost;
// Each piece is identified by a single letter taken from the standard English names ('P' = pawn, 'N' = knight, 'B' = bishop, 'R' = rook, 'Q' = queen, 'K' = king);
// White pieces are designated using upper-case letters ("PNBRQK") while black pieces use lowercase ("pnbrqk");
// Empty squares are noted using digits 1 through 8 (the number of empty squares from the last piece);
// Empty lines are noted as "8".

// starting position looks like:
// "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"

// After the white pawn moves from e2 to e4, the notation will be as follows:

// "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR"

// John has written down some positions using his notation, and now he wants to rotate the board 90 degrees clockwise and see what notation for the new board would look like. Help him with this task.

function chessNotation(notation) {
  //build 2d array board
  let notationWithSpaces = ''

  for(let letter of notation){
    if(letter.match(/\d/)){
      notationWithSpaces += ' '.repeat(+letter)
    }else{
      notationWithSpaces += letter
    }
  }

  let board = notationWithSpaces.split('/').map(x=>x.split(''))

  // rotate board using new variable newBoard
  let newBoard = [[],[],[],[],[],[],[],[]]
  {  
    let col = 7
    for(let i=0;i<8;i++){
      for(let j=0;j<8;j++){
        newBoard[j][col] = board[i][j]
      }
      col--
    }
  }

  // replace spaces with numbers and join back into a string
  let spaces = 0
  for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
      if(newBoard[i][j] === ' ' && newBoard[i][j+1] === ' '){
        spaces++
      }else if(newBoard[i][j] === ' '){
        newBoard[i][j] = spaces + 1
        spaces = 0
      }
    }
  }
  return newBoard.map(x=>x.filter(a=>a!=' ').join('')).join('/')
}
//----------------------------------------------------------------------------------
//refactored: reduced to 3 loops
function chessNotation(notation) {
  //replace numbers in the string with the char '!'
  let strWithSpaces = ''
  for(let letter of notation){
    if(letter.match(/\d/)){
      strWithSpaces += '!'.repeat(letter)
    }else{
      strWithSpaces += letter
    }
  }
  
  // create an array the same size as the string
  // iterate through the string, putting it in the correct position in the array after the board is rotated 90 degrees
  let rotateArr = [...'/'.repeat(strWithSpaces.length)]
  let start = 7
  let col = 7
  for(let i in strWithSpaces){
      rotateArr[start] = strWithSpaces[i]
      if(strWithSpaces[i] === '/'){
        continue
      }else if(start < 62){
        start += 9
      }else{
        col--
        start = col
      }
  }

  //rebuild the string, replacing the empty spaces with numbers
  let finalStr = ''
  let count = 0
  for(let i=0;i<rotateArr.length;i++){
    if(rotateArr[i] === '!'){
      count++
    }else{
      if(count>0){
        finalStr += count
        count = 0
      }
      finalStr += rotateArr[i]
    }
    if(i === rotateArr.length - 1){
      if(count > 0){
        finalStr += count
      }
    }
  }
  return finalStr
}

console.log(chessNotation("rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR"))
                                                                          //"RP4pr/NP4pn/BP4pb/QP4pq/K2P2pk/BP4pb/NP4pn/RP4pr"
console.log(chessNotation("2kr3r/pp1nbppp/3p1n2/q1pPp1B1/4P1b1/2N2N2/PPP1BPPP/R2Q2RK"))
                                                                                      //"RP2q1p1/1P4p1/1PN1p2k/Q3Ppnr/1B1Pp1b1/1PN2np1/RP1bB1p1/KP4pr"
console.log(chessNotation("bN2nrp1/n1nQn1n1/p1bPRPrb/n2Q1Nrb/Bn1nBRnB/Q1n1N1b1/qk1n1R2/Q1n2n1Q"))
                                                                                                //"QqQBnpnb/1k1n3N/n1n2bn1/1n1nQPQ1/2NB1Rnn/nR1RNP1r/2bnrrnp/Q2Bbb2"