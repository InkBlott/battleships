import React from 'react';
import Board from './Board';
import GameInfoTable from './GabeInfoTable';


function BoardContainer({playerBoard, cpuBoard,  handler, dropper, isV, rotate}){
    let shipsSet = false;

    return(
        <div className='container'> 
            <div> 
                <div className='row'>
                    <Board board={playerBoard} isCpu={false} dropper={dropper}/>

                    {shipsSet ?
                    <Board handler={handler} board={cpuBoard} isCpu={true}/>
                    :
                    <GameInfoTable isV={isV} rotate={rotate}/>
                }
                </div>
            </div>
          
        </div>
    )
}
export default BoardContainer;