// On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

// The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.

// Return the number of pawns the rook can capture in one move.

const numRookCaptures = (board) =>{
    let x
    let y
    let count = 0
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j] === 'R'){
                x = i
                y = j
            }
        }
    }

    let i = x
    while(true){
        i--
        if(board[i]){
            if(board[i][y] === 'p'){
            count++
            break
            }else if(board[i][y] === 'B'){
            break
            }
        }else{
            break
        }
    }

    i = x
    while(true){
        i++
        if(board[i]){
            if(board[i][y] === 'p'){
            count++
            break
            }else if(board[i][y] === 'B'){
            break
            }
        }else{
            break
        }
    }

    let j = y
    
    while(true){
        j--
        if(board[x][j]){
            if(board[x][j] === 'p'){
                count++
                break
            }else if(board[x][j] === 'B'){
                break
            }
        }else{
            break
        }
    }

    j = y
    while(true){
        j++
        if(board[x][j]){
            if(board[x][j] === 'p'){
                count++
                break
            }else if(board[x][j] === 'B'){
                break
            }
        }else{
            break
        }
    }
    return count
}

console.log(numRookCaptures([
[".",".",".",".",".",".",".","."],
[".",".",".","p",".",".",".","."],
[".",".",".","p",".",".",".","."],
["p","p",".","R",".","p","B","."],
[".",".",".",".",".",".",".","."],
[".",".",".","B",".",".",".","."],
[".",".",".","p",".",".",".","."],
[".",".",".",".",".",".",".","."]]))//3
console.log(numRookCaptures([
    [".",".",".",".",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".","R",".",".",".","p"],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."]]))//3