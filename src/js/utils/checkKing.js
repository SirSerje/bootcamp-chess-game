import state from '../state';

function checkKing (checkMoves, board, player) {
    // debugger;
    // console.log(player)
    let king = null;
    let check = false;
    
    // find king on board
    board.forEach((row, x) => {
        row.forEach((space, y) => {
            // console.log(space)
            if (board[x][y].children[0].id.includes(`${player}-king`)) {
                // debugger
                king = { x: x, y: y };
            }
        });
    });
    
    checkMoves.forEach((v) => {
        // console.log(king)
        // debugger
        if (v.x === king.x && v.y === king.y) {
            console.log(player + ' king is in Check!')
            check = true;
            // state.currPiece = { x: king.x, y: king.y };
        }
    });
    return check;
}

export default checkKing;