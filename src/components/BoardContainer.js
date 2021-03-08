import Board from './Board';
import GameInfoTable from './GabeInfoTable';


function BoardContainer({placer ,shipsSet ,setShips, reset, playerBoard, cpuBoard,  handler, dropper, isV, rotate}){


    return(
        <div className='container'> 
            <div> 
                <div className='row gy-3' id='mainRow'>
                    <Board board={playerBoard} isCpu={false} dropper={dropper}/>

                    {shipsSet ?
                        <Board handler={handler} board={cpuBoard} isCpu={true}/>
                    :
                    <GameInfoTable placer={placer} shipsSet={setShips} reset ={reset} isV={isV} rotate={rotate}/>
                }
                </div>
            </div>
          
        </div>
    )
}
export default BoardContainer;