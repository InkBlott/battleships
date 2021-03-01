import React, {useEffect, useState} from 'react';
import Board from './Board'


function BoardContainer({playerBoard, cpuBoard,  handler}){

    return(
        <div className='container'> 
            <div> 
                <div className='row'>
                    <Board board={playerBoard} isCpu={false}/>
                    <Board handler={handler} board={cpuBoard} isCpu={true}/>
                </div>
            </div>
          
        </div>
    )
}
export default BoardContainer;