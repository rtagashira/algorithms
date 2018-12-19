// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example

// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true.

// For cell1 = "A1" and cell2 = "H3", the output should be
// chessBoardCellColor(cell1, cell2) = false.

function chessBoardCellColor2(cell1, cell2) {
  let c1Color='',
      c2Color='',
      aArr = ['A','C','E','G']
  
  if(aArr.indexOf(cell1[0])>=0){        //is cell1 a,c,e or G?
    if(cell1[1]%2!=0){                  //odd squares
      c1Color = 'black'
    }else{                              //even squares
      c1Color = 'white'
    }
  }else{                                //b,d,f,h
    if(cell1[1]%2!=0){
      c1Color = 'white'                 //odd
    }else{
      c1Color = 'black'                 //even
    }
  }
  if(aArr.indexOf(cell2[0])>=0){        //is cell2 a,c,e or G?
    if(cell2[1]%2!=0){                  //odd squares
      c2Color = 'black'
    }else{                              //even squares
      c2Color = 'white'
    }
  }else{                                //b,d,f,h
    if(cell2[1]%2!=0){
      c2Color = 'white'                 //odd
    }else{
      c2Color = 'black'                 //even
    }
  }

  return c1Color === c2Color
}

//---------------------------------------------------------------------------------
//Get the color (0=black, 1=white) for a given cell
var color = s => (Buffer(s)[0] - s[1])%2

var chessBoardCellColor = (a,b) => color(a) == color(b)
//-------------------------------------------------------------------------
function chessBoardCellColor(cell1, cell2) {
  return (cell1.charCodeAt(0)+Number(cell1[1])+cell2.charCodeAt(0)+Number(cell2[1]))%2==0}


console.log(chessBoardCellColor('A1','C3'))//true
console.log(chessBoardCellColor('A1','H3'))//false
console.log(chessBoardCellColor('A2','A5'))//false