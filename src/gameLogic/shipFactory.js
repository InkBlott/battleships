const MAX_LENGTH = 4;
const MIN_LENGTH = 1;

function shipFactory(length){

    const lives=[];
    
    const fixedLength = (length) => {
        if (length > MAX_LENGTH) return MAX_LENGTH;
        if (length < MIN_LENGTH) return MIN_LENGTH;
        return length;
    }

    function isSunk() {
        if (lives.join('').length === length){
            return true;
        } else return false;
    }

    const shipLength = fixedLength(length)

    function hitArea(position) {
        if(position >= MIN_LENGTH && position <= length){
            lives[position-1] = 'x'; 
        }               
    }

    return {
        getLength: () => shipLength,
        getLives: () => lives,
        hitArea,
        isSunk,
    }
}

export {shipFactory};