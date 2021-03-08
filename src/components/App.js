import React, { useState } from 'react'
import BoardContainer from './BoardContainer'
import { player } from '../gameLogic/playerFactory'
import { boardFactory } from '../gameLogic/boardFactory'
import {shipFactory} from '../gameLogic/shipFactory'
import '../styles/Styles.css'
import Swal from 'sweetalert2';
import clone from 'lodash/clone';


function App() {
    const humanPlayer = new player();
    const cpuPlayer = new player();
    const [cpuBoardMaker, setCpuMaker] = useState(new boardFactory());
    const [playerBoardMaker, setPMaker] = useState(new boardFactory());
    let turn = true;
    const [start, setStart] = useState(true);
    const [shipsSet, setShipsS] = useState(false);

    function startGame() {
        console.log(playerBoardMaker);
        cpuBoardMaker.makeBoard();
        cpuBoardMaker.populateBoard();
        playerBoardMaker.makeBoard();
        setStart(!start);
    }

    function checkWin(sunkShips) {
        if(sunkShips === 10){
            Swal.fire({
                title: 'Congratulations!',
                text: 'You win',
                customClass: {
                    confirmButton: 'swal-btn',                    
                  },
                buttonsStyling:false,
                confirmButtonText:'Play again',
                width:'auto',
                allowOutsideClick:false,
              }).then((result) => {
                if(result.isConfirmed) {
                    fullReset();
                }
              })
        }
    }

    function checkLoss(sunkShips) {
        if(sunkShips === 10){
            Swal.fire({
                title: 'You loose...',
                text: 'Your fleet has been destroyed',
                customClass: {
                    confirmButton: 'swal-btn',                    
                  },
                buttonsStyling:false,
                confirmButtonText:'Play again',
                width:'auto',
                allowOutsideClick:false,
              }).then((result) => {
                if(result.isConfirmed) {
                    fullReset();
                }
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
        let pBoardHolder = clone(playerBoardMaker);
        pBoardHolder.clearBoard();
        pBoardHolder.populateBoard();
        let droppables=document.getElementsByClassName('placerContainer');
        for (let i=0; i<droppables.length; i++){
            droppables[i].classList.add('invis');
        }
        setPMaker(pBoardHolder);
    }
    

    //drop ship into board
    function dropper(ev, xC, yC){
        ev.preventDefault();
        let pBoardHolder = clone(playerBoardMaker);
        if(typeof pBoardHolder.board[xC][yC] !== 'object'){
            let data = ev.dataTransfer.getData('text/plain');
            let shipLen = parseInt((data.split('.'))[1]);
            let ship = new shipFactory(shipLen);
            pBoardHolder.placeShip(ship, xC, yC);
            
            if(pBoardHolder.board[xC][yC] === ship) {
                document.getElementById(data).classList.add('invis');
            }
            setPMaker(pBoardHolder);
        }
    }

    //clear player board, display droppables
    function reset() {
        let pBoardHolder = clone(playerBoardMaker);
        let droppables=document.getElementsByClassName('placerContainer');
        pBoardHolder.clearBoard();
        for (let i=0; i<droppables.length; i++){
            droppables[i].classList.remove('invis');
        }
        setPMaker(pBoardHolder);
    }

    //full reset both boards after game over
    function fullReset() {
        let pBoardHolder = clone(playerBoardMaker);
        let cBoardHolder = clone(cpuBoardMaker);
        let droppables=document.getElementsByClassName('placerContainer');
        pBoardHolder.clearBoard();
        pBoardHolder.setSunkenShips(0);
        cBoardHolder.clearBoard();
        cBoardHolder.populateBoard();
        cBoardHolder.setSunkenShips(0);
        for (let i=0; i<droppables.length; i++){
            droppables[i].classList.remove('invis');
        }
        setPMaker(pBoardHolder);
        setCpuMaker(cBoardHolder);
        setShipsS(false);
    }


    //rotate ships for dropping
    function rotator() {
        let rotator = clone(playerBoardMaker);
        rotator.setVertical();
        setPMaker(rotator);
    }

    


    function handleFire(xC, yC) {
        let cBoardHolder = clone(cpuBoardMaker);
        if (typeof cBoardHolder.board[xC][yC] !== 'object') {
            turn = false;
        }
        humanPlayer.fire(cBoardHolder, xC, yC);
        setCpuMaker(cBoardHolder, checkWin(cBoardHolder.getSunkenShips()));
        console.log(cpuBoardMaker.getSunkenShips());
        while (!turn) {
            cpuFire();
        }
    }

    function cpuFire() {
        let pBoardHolder = clone(playerBoardMaker);
        let x = Math.floor(Math.random() * 10); 
        let y = Math.floor(Math.random() * 10); 
        while(pBoardHolder.board[x][y] === (('*') || ('!') || ('#') || ('@'))){
            x = Math.floor(Math.random() * 10); 
            y = Math.floor(Math.random() * 10); 
        }
        cpuPlayer.fire(pBoardHolder,x ,y);
        if(pBoardHolder.board[x][y] === '*') turn = true;
        setPMaker(pBoardHolder, checkLoss(pBoardHolder.getSunkenShips()));
    }

    return (
        <div className='container'>
                <div className='row-xs title'>BATTLESHIPS</div>
                {start ?
                    <button className='row startBtn' onClick={() => startGame()}> START</button>
                    :
                    <BoardContainer placer={placer} shipsSet={shipsSet} setShips={setShips} reset={reset} rotate={rotator} isV={playerBoardMaker.getVertical()} playerBoard={playerBoardMaker.board} cpuBoard={cpuBoardMaker.board} handler={handleFire} dropper={dropper}/>
                }
        </div>

    )

}

export default App;