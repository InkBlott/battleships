import React, { useState } from 'react'
import BoardContainer from './BoardContainer'
import { player } from '../gameLogic/playerFactory'
import { boardFactory } from '../gameLogic/boardFactory'


function App() {
    const humanPlayer = player();
    const cpuPlayer = player();
    const [cpuBoardMaker, setCpuMaker] = useState(boardFactory());
    const [playerBoardMaker, setPMaker] = useState(boardFactory());
    const [pBoard, setPboard] = useState();
    const [cBoard, setCboard] = useState();
    let turn = true;
    const [start, setStart] = useState(true);

    function startGame() {
        setPMaker(playerBoardMaker);
        setCpuMaker(cpuBoardMaker);
        cpuBoardMaker.makeBoard();
        cpuBoardMaker.populateBoard();
        playerBoardMaker.makeBoard();
        setPboard(playerBoardMaker.board);
        setCboard(cpuBoardMaker.board);
        setStart(!start);


    }


    function handleFire(xC, yC) {
        let cBoardHolder = Object.assign({}, cpuBoardMaker);
        if (typeof cBoard[xC][yC] !== 'object') {
            turn = false;
        }
        humanPlayer.fire(cBoardHolder, xC, yC);
        console.table(cBoardHolder.board);
        console.table(cpuBoardMaker.board);
        setCpuMaker(cBoardHolder);
        setCboard(cpuBoardMaker.board);
        while (!turn) {
            cpuFire();
        }
    }

    function cpuFire() {
        let pBoardHolder = Object.assign({}, playerBoardMaker);
        cpuPlayer.fire(pBoardHolder, 1, 1);
        turn = true;
        setp
        console.log(turn);
    }

    return (
        <div className='container'>
            <div> blablabla 
                {start ?
                    <button onClick={() => startGame()}> ass</button>
                    :
                    <BoardContainer playerBoard={pBoard} cpuBoard={cBoard} handler={handleFire} />
                }
            </div>

        </div>

    )

}

export default App;