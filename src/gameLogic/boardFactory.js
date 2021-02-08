const MAX_BOARD = 9;
const MIN_BOARD = 0;

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
        if(coord + (ship.getLength()-1) <= MAX_BOARD && (coord >= MIN_BOARD)) {
            return true;
        } else return false;
    }


    //checks if empty cell
    function checkCellFree(xCoord, yCoord, ship) {
        let free = true;
        if (isVertical===false){
            for (let i=0; i <ship.getLength(); i++){
                if(board[xCoord][yCoord + i] !== undefined){
                    free = false;
                } 
            } 
        } else if (isVertical===true){
            for (let i=0; i <ship.getLength(); i++){
                if(board[xCoord+i][yCoord] !== undefined){
                    free = false;
                } 
            } 
        }
        return free;
    }
    

    function placeShipBorder(length, xCoord, yCoord, mark) {
        
        //Horizontal ship borders
        if(isVertical === false){

            //left border
            if(yCoord-1 >= MIN_BOARD){
                board[xCoord][yCoord-1] = mark;
            }
            //top border
            if((xCoord-1) >= MIN_BOARD){
                for(let i=0; i<length; i++){
                    board[xCoord-1][yCoord+i] = mark;
                }
            }   
            //right border
            if(((yCoord + length))<=MAX_BOARD){
                board[xCoord][((yCoord + length))] = mark;
            }
            //bot border
            if((xCoord+1) <= MAX_BOARD){
                for(let i=0; i<length; i++){
                    board[xCoord+1][yCoord+i] = mark;
                }
            }   
            //corners:
            //NW
            if((xCoord-1 )>=MIN_BOARD && (yCoord-1) >= MIN_BOARD){
                board[xCoord-1][yCoord-1] = mark;
            }
            //NE
            if((xCoord-1 )>=MIN_BOARD && (yCoord+length) <= MAX_BOARD){
                board[xCoord-1][yCoord+length] = mark;
            }
            //SW
            if((xCoord+1 )<=MAX_BOARD && (yCoord-1) >= MIN_BOARD){
                board[xCoord+1][yCoord-1] = mark;
            }
            //SE
            if((xCoord+1 )<=MAX_BOARD && (yCoord+length) <= MAX_BOARD){
                board[xCoord+1][yCoord+length] = mark;
            }
        } 

        //Vertical ship borders
        if (isVertical === true) {
            //top border
            if(xCoord-1 >= MIN_BOARD){
                board[xCoord-1][yCoord] = mark;
            }
            //bottom border
             if(((xCoord + length))<=MAX_BOARD){
                board[(xCoord + length)][yCoord] = mark;
            }
            //left border
            if((yCoord-1) >= MIN_BOARD){
                for(let i=0; i<length; i++){
                    board[xCoord+i][yCoord-1] = mark;
                }
            } 
            //right border
            if((yCoord+1) <= MAX_BOARD){
                for(let i=0; i<length; i++){
                    board[xCoord+i][yCoord+1] = mark;
                }
            } 
            //corners:
            //NW
            if((xCoord-1 )>=MIN_BOARD && (yCoord-1) >= MIN_BOARD){
                board[xCoord-1][yCoord-1] = mark;
            }
            //NE
            if((xCoord-1 )>=MIN_BOARD && (yCoord+1) <= MAX_BOARD){
                board[xCoord-1][yCoord+1] = mark;
            }
            //SW
            if((xCoord+length)<=MAX_BOARD && (yCoord-1) >= MIN_BOARD){
                board[xCoord+length][yCoord-1] = mark;
            }
            //SE
            if((xCoord+length)<=MAX_BOARD && (yCoord+1) <= MAX_BOARD){
                board[xCoord+length][yCoord+1] = mark;
            }
            

        }
    }



    function placeShip(ship, xCoord, yCoord) {
        if(isVertical === false){
            if ((boardLengthCheck(ship, yCoord)) && checkCellFree(xCoord, yCoord, ship)){
                for(let i=0; i<ship.getLength(); i++){
                    board[xCoord][yCoord + i] = ship;
                }
                placeShipBorder(ship.getLength(), xCoord, yCoord, 'x');
            }
        } else if (isVertical === true){
            if ((boardLengthCheck(ship, xCoord)) && checkCellFree(xCoord, yCoord, ship)){
                for(let i=0; i<ship.getLength(); i++){
                    board[xCoord+i][yCoord] = ship;
                }
                placeShipBorder(ship.getLength(), xCoord, yCoord, 'x');
            }
        }
    }

    function receiveAttack(xCoord, yCoord){
        if(typeof (board[xCoord][yCoord]) === 'object'){
            const shipShotAt = board[xCoord][yCoord];
            shipShotAt.hit();
            board[xCoord][yCoord]= '@';
            if(shipShotAt.isSunk()){   
                let len = 1; 
                if(((board[xCoord+1][yCoord]) === '@') || ((board[xCoord-1][yCoord]) === '@')){
                    isVertical=true;
                    while( board[xCoord-1][yCoord] === '@'){
                        xCoord = xCoord-1;
                    }
                    let coordHolder = xCoord;
                    while( board[coordHolder+1][yCoord] === '@'){
                        coordHolder = coordHolder+1;
                        len = len+1;
                    }
                    placeShipBorder(len, xCoord, yCoord, '#');
                    for(let i=0; i<len; i++){
                        board[xCoord+i][yCoord] = '!';
                    }
                }        
                if(((board[xCoord][yCoord-1]) === '@') || ((board[xCoord][yCoord+1]) === '@')){
                    isVertical=false;
                    while( board[xCoord][yCoord-1] === '@'){
                        yCoord = yCoord-1;
                    }
                    let coordHolder = yCoord;
                    while( board[xCoord][coordHolder+1] === '@'){
                        coordHolder = coordHolder+1;
                        len = len+1;
                    }
                    placeShipBorder(len, xCoord, yCoord, '#');
                    for(let i=0; i<len; i++){
                        board[xCoord][yCoord+i] = '!';
                    }
                }          
            }
        }   
        else if (board[xCoord][yCoord] === '#' || board[xCoord][yCoord] === '!' || board[xCoord][yCoord] === '@' || board[xCoord][yCoord] === '*'){
            return;
        }
        else {
            board[xCoord][yCoord] = '*';
        }
    }
        
    return {
        board,
        makeBoard,
        clearBoard,
        placeShip,
        setVertical,
        getVertical : () => isVertical,
        receiveAttack,

    }

}

export {boardFactory}