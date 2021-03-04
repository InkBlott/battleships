import React from 'react';
import {shipFactory} from '../gameLogic/shipFactory'

export default function GameInfoTable(){
    const len4 = 4;
    

    function drag(e){
        e.dataTransfer.setData('text/plain', len4);
    }

    return(
        <div id='4' className='col' draggable='true' onDragStart={(e) => drag(e)}>aaaa</div>
    )
}