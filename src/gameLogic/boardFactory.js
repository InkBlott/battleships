const MAX_BOARD = 9;

function boardFactory() {

    const board = [];
    let isVertical = false;

    function setVertical() {
        isVertical = !isVertical
    }


    //Creates 10x10 matrix
    function makeBoard() {
        for(var i=0; i<=9; i++){
            board[i] = new Array(10).fill();
          }
    }

    function clearBoard(){
        for(var i=0; i<=9; i++){
            board[i].fill();
          }
    }

    //Checks if ship length doesn't exceed board
    function boardLengthCheck(ship, coord) {
        if(coord + (ship.getLength()-1) <= MAX_BOARD ) {
            return true;
        } else return false;
    }

    //checks if empty cell
    function checkCellFree(xCoord, yCoord, ship) {
        let free = true;
        if (isVertical===false){
            for (let i=0; i <=ship.getLength(); i++){
                if(board[xCoord][yCoord + i] !== undefined){
                    free = false;
                } 
            } 
        } else if (isVertical===true){
            for (let i=0; i <=ship.getLength(); i++){
                if(board[xCoord+i][yCoord] !== undefined){
                    free = false;
                } 
            } 
        }
        return free;
    }



    function placeShip(ship, xCoord, yCoord) {
        if(isVertical === false){
            if ((boardLengthCheck(ship, yCoord)) && checkCellFree(xCoord, yCoord, ship)){
                for(let i=0; i<ship.getLength(); i++){
                    board[xCoord][yCoord + i] = 0;
                }
            }
        } else if (isVertical === true){
            if ((boardLengthCheck(ship, xCoord)) && checkCellFree(xCoord, yCoord, ship)){
                for(let i=0; i<ship.getLength(); i++){
                    board[xCoord+i][yCoord] = 0;
                }
            }
        }

    }
        
    return {
        board,
        makeBoard,
        clearBoard,
        placeShip,
        setVertical,
        getVertical : () => isVertical,

    }

}

export {boardFactory}