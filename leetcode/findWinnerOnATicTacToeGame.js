// Tic-tac-toe is played by two players A and B on a 3 x 3 grid.

// Here are the rules of Tic-Tac-Toe:

// Players take turns placing characters into empty squares (" ").
// The first player A always places "X" characters, while the second player B always places "O" characters.
// "X" and "O" characters are always placed into empty squares, never on filled ones.
// The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
// The game also ends if all squares are non-empty.
// No more moves can be played if the game is over.
// Given an array moves where each element is another array of size 2 corresponding to the row and column of the grid where they mark their respective character in the order in which A and B play.

// Return the winner of the game if it exists (A or B), in case the game ends in a draw return "Draw", if there are still movements to play return "Pending".

// You can assume that moves is valid (It follows the rules of Tic-Tac-Toe), the grid is initially empty and A will play first.

const tictactoe = (moves) =>{
    let board = [new Array(3),new Array(3),new Array(3)],
        a = true,
        turns = 0
    for(let m of moves){
        if(a){
            board[m[0]][m[1]] = 'A'
            a = false
        }else{
            board[m[0]][m[1]] = 'B'
            a = true
        }
        turns++
    }

    for(let i=0;i<3;i++){
        let temp
        if(board[i][0]){
            temp = board[i][0]
            if(board[i].filter(x=>x===temp).length === 3) return temp
        }
        if(board[0][i]){
            temp = board[0][i]
            if(board[1][i] === temp && board[2][i] === temp) return temp
        }
    }
    if(board[0][0]){
        if(board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[0][0]
    }
    if(board[0][2]){
        if(board[0][2] === board[1][1] && board[1][1] === board[2][0]) return board[0][2]
    }
    return turns === 9? 'Draw' : 'Pending'
}

console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]]))//'A'
console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]))//'B'
console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]))//'Draw'
console.log(tictactoe([[0,0],[1,1]]))//'Pending'