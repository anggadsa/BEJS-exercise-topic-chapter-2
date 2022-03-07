function vocalSeeker(board) {
    // Write your code here
    let vokal = 0;
    let string = "";
    for(i=0; i<board.length; i++){
        for(j=0; j<board[i].length; j++){
            // console.log(board[i][j])
            if(board[i][j] === `a`||board[i][j] === `A` || board[i][j] === `i` 
            ||board[i][j] === `i` || board[i][j] === `I` ||board[i][j] === `u` 
            ||board[i][j] === `e`||board[i][j] === `E`||board[i][j] === `o`
            ||board[i][j] === `o`){
                string += board[i][j]
                vokal += 1
            }
            
        }
    }
    return `vokal ditemukan ${vokal} dan kumpulan vokal adalah ${string}`
} 
//DRIVER CODE

let board = [
    ['*', '*', '*', 10],
    ['*', '*', -5, -10, '*', 100],
    ['a', 'A', 'o', 'b'],
]

console.log(vocalSeeker(board))