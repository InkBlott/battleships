import { shipFactory } from "./shipFactory";

const MAX_BOARD = 9;
const MIN_BOARD = 0;

class boardFactory {
    
    board = [];
    isVertical = false;
    sunkenShips=0;

    setVertical() {
        this.isVertical = !this.isVertical
    }

    getVertical() {
        return this.isVertical;
    }

    //Creates 10x10 matrix
    makeBoard() {
        for(let i=0; i<=9; i++){
            this.board[i] = new Array(10).fill('~');
          }
    }

    getCells(){
        let cells=0;
        for(let i = 0; i <= 9 ; i++){
            for( let x =0; x<= 9; x++){
                if(typeof (this.board)[i][x] === "object"){
                    cells = cells+1;
                }
            }
        }
        return cells;
    }

    clearBoard(){
        for(var i=0; i<=9; i++){
            this.board[i].fill('~');
          }
    }

    //checks if empty cell
    checkCellFree(xCoord, yCoord, ship) {
        let free = true;
        if (this.isVertical === false) {
            for (let i = 0; i < ship.getLength(); i++) {
                if ((yCoord + i) <= MAX_BOARD) {
                    if ((this.board[xCoord][yCoord + i] !== '~')) {
                        free = false;
                    } 
                }else free = false;
            }
        } else if (this.isVertical === true) {
            for (let i = 0; i < ship.getLength(); i++) {
                if((xCoord + i) <= MAX_BOARD){
                    if (this.board[xCoord + i][yCoord] !== '~') {
                        free = false;
                    }
                } else free =false;
            }
        }
        return free;
    }
    
    placeShipBorder(length, xCoord, yCoord, mark) {
        
        //Horizontal ship borders
        if(this.isVertical === false){

            //left border
            if(yCoord-1 >= MIN_BOARD){
                this.board[xCoord][yCoord-1] = mark;
            }
            //top border
            if((xCoord-1) >= MIN_BOARD){
                for(let i=0; i<length; i++){
                    this.board[xCoord-1][yCoord+i] = mark;
                }
            }   
            //right border
            if(((yCoord + length))<=MAX_BOARD){
                this.board[xCoord][((yCoord + length))] = mark;
            }
            //bot border
            if((xCoord+1) <= MAX_BOARD){
                for(let i=0; i<length; i++){
                    this.board[xCoord+1][yCoord+i] = mark;
                }
            }   
            //corners:
            //NW
            if((xCoord-1 )>=MIN_BOARD && (yCoord-1) >= MIN_BOARD){
                this.board[xCoord-1][yCoord-1] = mark;
            }
            //NE
            if((xCoord-1 )>=MIN_BOARD && (yCoord+length) <= MAX_BOARD){
                this.board[xCoord-1][yCoord+length] = mark;
            }
            //SW
            if((xCoord+1 )<=MAX_BOARD && (yCoord-1) >= MIN_BOARD){
                this.board[xCoord+1][yCoord-1] = mark;
            }
            //SE
            if((xCoord+1 )<=MAX_BOARD && (yCoord+length) <= MAX_BOARD){
                this.board[xCoord+1][yCoord+length] = mark;
            }
        } 

        //Vertical ship borders
        if (this.isVertical === true) {
            //top border
            if(xCoord-1 >= MIN_BOARD){
                this.board[xCoord-1][yCoord] = mark;
            }
            //bottom border
             if(((xCoord + length))<=MAX_BOARD){
                this.board[(xCoord + length)][yCoord] = mark;
            }
            //left border
            if((yCoord-1) >= MIN_BOARD){
                for(let i=0; i<length; i++){
                    this.board[xCoord+i][yCoord-1] = mark;
                }
            } 
            //right border
            if((yCoord+1) <= MAX_BOARD){
                for(let i=0; i<length; i++){
                    this.board[xCoord+i][yCoord+1] = mark;
                }
            } 
            //corners:
            //NW
            if((xCoord-1 )>=MIN_BOARD && (yCoord-1) >= MIN_BOARD){
                this.board[xCoord-1][yCoord-1] = mark;
            }
            //NE
            if((xCoord-1 )>=MIN_BOARD && (yCoord+1) <= MAX_BOARD){
                this.board[xCoord-1][yCoord+1] = mark;
            }
            //SW
            if((xCoord+length)<=MAX_BOARD && (yCoord-1) >= MIN_BOARD){
                this.board[xCoord+length][yCoord-1] = mark;
            }
            //SE
            if((xCoord+length)<=MAX_BOARD && (yCoord+1) <= MAX_BOARD){
                this.board[xCoord+length][yCoord+1] = mark;
            }
            

        }
    }

    placeShip(ship, xCoord, yCoord) {
        if(this.isVertical === false){
            if (this.checkCellFree(xCoord, yCoord, ship)){
                for(let i=0; i<ship.getLength(); i++){
                    this.board[xCoord][yCoord + i] = ship;
                }
                this.placeShipBorder(ship.getLength(), xCoord, yCoord, 'x');
            }
        } else if (this.isVertical === true){
            if (this.checkCellFree(xCoord, yCoord, ship)){
                for(let i=0; i<ship.getLength(); i++){
                    this.board[xCoord+i][yCoord] = ship;
                }
                this.placeShipBorder(ship.getLength(), xCoord, yCoord, 'x');
            }
        }
    }

    receiveAttack(xCoord, yCoord){
        if(typeof (this.board[xCoord][yCoord]) === 'object'){
            const shipShotAt = this.board[xCoord][yCoord];
            shipShotAt.hit();
            this.board[xCoord][yCoord]= '@';
            if(shipShotAt.isSunk()){   
                this.renderSunken(xCoord, yCoord);   
                this.sunkenShips=this.sunkenShips+1;     
            }
        }   
        else if (this.board[xCoord][yCoord] === '#' || this.board[xCoord][yCoord] === '!' || this.board[xCoord][yCoord] === '@' || this.board[xCoord][yCoord] === '*'){
            return;
        }
        else {
            this.board[xCoord][yCoord] = '*';
        }
    }

    //Replaces sunken ships symbols, places a new border around the sunken ship
    renderSunken(xCoord, yCoord){
        let len = 1; 
        
        if(((xCoord+1 <= MAX_BOARD) && ((this.board[xCoord+1][yCoord]) === '@')) || ((xCoord-1 >= MIN_BOARD) && ((this.board[xCoord-1][yCoord]) === '@'))){
            this.isVertical=true;
            while(xCoord-1 >= MIN_BOARD && this.board[xCoord-1][yCoord] === '@'){
                xCoord = xCoord-1;
            }
            let coordHolder = xCoord;
            while(coordHolder+1 <= MAX_BOARD && this.board[coordHolder+1][yCoord] === '@'){
                coordHolder = coordHolder+1;
                len = len+1;
            }
            this.placeShipBorder(len, xCoord, yCoord, '#');
            for(let i=0; i<len; i++){
                this.board[xCoord+i][yCoord] = '!';
            }
        }        
        if(((yCoord-1 >= MIN_BOARD) && ((this.board[xCoord][yCoord-1]) === '@')) || ((yCoord+1 <= MAX_BOARD) && ((this.board[xCoord][yCoord+1]) === '@'))){
            this.isVertical=false;
            while( this.board[xCoord][yCoord-1] === '@'){
                yCoord = yCoord-1;
            }
            let coordHolder = yCoord;
            while( this.board[xCoord][coordHolder+1] === '@'){
                coordHolder = coordHolder+1;
                len = len+1;
            }
            this.placeShipBorder(len, xCoord, yCoord, '#');
            for(let i=0; i<len; i++){
                this.board[xCoord][yCoord+i] = '!';
            }
        }
        else {
            this.placeShipBorder(len, xCoord, yCoord, '#');
            this.board[xCoord][yCoord] = '!';

        }  

    }

    populateBoard(){
        const shipLen = [4,3,3,2,2,2,1,1,1,1];
        let ship;

        shipLen.forEach(len => {
            ship = shipFactory(len);
            let xCoord;
            let yCoord;

            if((Math.floor(Math.random()* 2)) === 1) {
                this.isVertical = true;
            } else this.isVertical=false;

            if (this.isVertical === false) {
                do {
                    xCoord = Math.floor(Math.random()* 10);
                    yCoord = Math.floor(Math.random()* 10);
                }
                while((this.checkCellFree(xCoord, yCoord, ship) === false ));
                this.placeShip(ship, xCoord, yCoord);                
            }
            else if (this.isVertical === true) {
                do {
                    xCoord = Math.floor(Math.random()* 10);
                    yCoord = Math.floor(Math.random()* 10);
                }
                while((this.checkCellFree(xCoord, yCoord, ship) === false));
                this.placeShip(ship, xCoord, yCoord);
            }
        })
    }
        
}

export {boardFactory}