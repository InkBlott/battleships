const MAX_LENGTH = 4;
const MIN_LENGTH = 1;

class shipFactory{
    constructor(length){
        this.shipLength = this.fixedLength(length)
    }
    lives=[];
    
    fixedLength = (length) => {
        if (length > MAX_LENGTH) return MAX_LENGTH;
        if (length < MIN_LENGTH) return MIN_LENGTH;
        return length;
    }

    isSunk() {
        if (this.lives.join('').length === this.shipLength){
            return true;
        } else return false;
    }

    hit() {
        if(this.lives.length <= this.shipLength){
            this.lives.push('x'); 
        }
                     
    }

    getLength() {
        return this.shipLength;
    }
    getLives() {
        return this.lives;
    }
}

export {shipFactory};