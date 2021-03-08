import React, { useState } from 'react'
import BoardContainer from './BoardContainer'
import { player } from '../gameLogic/playerFactory'
import { boardFactory } from '../gameLogic/boardFactory'
import {shipFactory} from '../gameLogic/shipFactory'
import '../styles/Styles.css'
import Swal from 'sweetalert2';


function App() {
    const humanPlayer = player();
    const cpuPlayer = player();
    const [cpuBoardMaker, setCpuMaker] = useState(boardFactory());
    const [playerBoardMaker, setPMaker] = useState(boardFactory());
    const [pBoard, setPboard] = useState();
    const [cBoard, setCboard] = useState();
    let turn = true;
    const [start, setStart] = useState(true);
    const [shipsSet, setShipsS] = useState(false);

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

    function checkWin() {
        if(playerBoardMaker.getSunkenShips === 10){
            Swal.fire({

            })
        }
        
    }

    //Start playing if all ships placed
    function setShips() {
        if(playerBoardMaker.getCells() === 20){
            setShipsS(!shipsSet);    
        } else {
            Swal.fire({
                icon: 'error',
                text: 'Place your ships first',
                customClass: {
                    confirmButton: 'swal-btn',                    
                    cancelButton: 'swal-btn'
                  },
                buttonsStyling:false,
              })
        }
    }

    //auto-placement of player ships
    function placer() {
        let pBoardHolder = Object.assign({}, playerBoardMaker);
        pBoardHolder.clearBoard();
        pBoardHolder.populateBoard();
        let droppables=document.getElementsByClassName('placerContainer');
        for (let i=0; i<droppables.length; i++){
            droppables[i].classList.add('invis');
        }
        setPMaker(pBoardHolder);
        setPboard(pBoardHolder.board);
    }
    

    //drop ship into board
    function dropper(ev, xC, yC){
        ev.preventDefault();
        let pBoardHolder = Object.assign({}, playerBoardMaker);
        if(typeof pBoardHolder.board[xC][yC] !== 'object'){
            let data = ev.dataTransfer.getData('text/plain');
            let shipLen = parseInt((data.split('.'))[1]);
            let ship = shipFactory(shipLen);
            pBoardHolder.placeShip(ship, xC, yC);
            
            if(pBoardHolder.board[xC][yC] === ship) {
                document.getElementById(data).classList.add('invis');
            }
            setPMaker(pBoardHolder);
            setPboard(playerBoardMaker.board);
            console.table(pBoard);
        }
    }

    //clear player board, display droppables
    function reset() {
        let pBoardHolder = Object.assign({}, playerBoardMaker);
        let droppables=document.getElementsByClassName('placerContainer');
        pBoardHolder.clearBoard();
        for (let i=0; i<droppables.length; i++){
            droppables[i].classList.remove('invis');
        }
        setPMaker(pBoardHolder);
        setPboard(playerBoardMaker.board);
    }

    //rotate ships for dropping
    function rotator() {
        let rotator = Object.assign({}, playerBoardMaker);
        rotator.setVertical();
        setPMaker(rotator);
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
        let x = Math.floor(Math.random() * 10); 
        let y = Math.floor(Math.random() * 10); 
        while(pBoardHolder.board[x][y] === (('*') || ('!') || ('#') || ('@'))){
            x = Math.floor(Math.random() * 10); 
            y = Math.floor(Math.random() * 10); 
        }
        cpuPlayer.fire(pBoardHolder,x ,y);
        console.log(x)
        if(pBoardHolder.board[x][y] === '*') turn = true;
        setPMaker(pBoardHolder);
        setPboard(playerBoardMaker.board);
        console.log(turn);
    }

    return (
        <div className='container'>
                <div className='row-xs title'>BATTLESHIPS</div>
                {start ?
                    <button className='row' onClick={() => startGame()}> START</button>
                    :
                    <BoardContainer placer={placer} shipsSet={shipsSet} setShips={setShips} reset={reset} rotate={rotator} isV={playerBoardMaker.getVertical()} playerBoard={pBoard} cpuBoard={cBoard} handler={handleFire} dropper={dropper}/>
                }
        </div>

    )

}

export default App;