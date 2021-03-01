function player() {
    
    function fire(enemyBoard, x, y){
        enemyBoard.receiveAttack(x, y);
    }

    return {
        fire,

    }

}

export {player}