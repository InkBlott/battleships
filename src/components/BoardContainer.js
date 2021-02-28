import React, {useEffect, useState} from 'react';
import {boardFactory} from '../gameLogic/boardFactory'
import {shipFactory} from '../gameLogic/shipFactory'
import {player} from '../gameLogic/playerFactory'
import Board from './Board'


function BoardContainer(){

    const humanPlayer = player();
    const cpuPlayer = player();
    let turn = true;
    
    const [cpuBoardMaker, setCBM] = useState(boardFactory());
    const [playerBoardMaker, setPBM] = useState(boardFactory());
    const [start, setStart] = useState(true);

    useEffect(()=> {
        cpuBoardMaker.makeBoard();
        cpuBoardMaker.populateBoard(); 
        playerBoardMaker.makeBoard();
        setCBM(cpuBoardMaker);
        setPBM(playerBoardMaker);
    }, [cpuBoardMaker, playerBoardMaker]);   

    function handleFire(xC, yC){ 
        if (typeof cpuBoardMaker.board[xC][yC] !== 'object'){
            turn = false;
        }
        humanPlayer.fire(cpuBoardMaker, xC, yC);
        console.table(cpuBoardMaker.board)
        console.log(turn);
        while(!turn){
            cpuFire();
            setPBM(playerBoardMaker);
        }
    }

    function cpuFire(){
        cpuPlayer.fire(playerBoardMaker, 1, 1);
        turn = true;
        console.log(turn);
    }


    return(
        <div className='container'> 
            <div> 
                {start ? 
                    <button onClick = {() => {
                        setStart(!start);
                    }}> ass</button>
                :
                <div className='row'>
                    <Board boardMaker={playerBoardMaker} isCpu={false}/>
                    <Board handler={handleFire} boardMaker={cpuBoardMaker} isCpu={true} player={humanPlayer} enemy={cpuPlayer} pBoard={playerBoardMaker}/>
                </div>
                }
            </div>
          
        </div>
    )
}
export default BoardContainer;