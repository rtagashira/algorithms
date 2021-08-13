// You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.



// Return true if the square is white, and false if the square is black.

// The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

const squareIsWhite = (str) =>{
    if(str[0] === 'a' ||
       str[0] === 'c' ||
       str[0] === 'e' ||
       str[0] === 'g'){
        return +str[1] % 2 === 0
    }else{
        return +str[1] % 2 !== 0
    }
}