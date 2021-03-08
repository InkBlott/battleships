import React from 'react';
import '../styles/Styles.css';

export default function GameInfoTable({placer ,shipsSet, isV, rotate, reset }) {

    function drag(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function getClass() {
        if (isV) {
            return 'col'
        } else return 'row'

    }

    return (

        <div className='col-md infoContainer d-flex flex-column'>
            <div className='row subT'>Place your ships:</div>

            <div className='row'>
                <div id='ShipPlacer0.4' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>

                </div>
                <div id='ShipPlacer1.3' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>

                </div>
                <div id='ShipPlacer2.3' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>
                </div>

                <div id='ShipPlacer3.2' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>
                </div>
                <div id='ShipPlacer4.2' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>
                </div>
                <div id='ShipPlacer5.2' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>
                </div>
                <div id='ShipPlacer6.1' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>
                </div>
                <div id='ShipPlacer7.1' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>
                </div>
                <div id='ShipPlacer8.1' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>
                </div>
                <div id='ShipPlacer9.1' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>
                </div>
            </div>
           
           <div className='row d-flex flex-grow-1 justify-content-end align-items-center flex-column'>
                <div className='row'>
                    <button className='col' onClick={ () => {
                        rotate();
                    }}>Rotate</button>
                    <button className='col' onClick={ () => {
                        reset();
                    }}>Reset</button>
                </div>
                <div className='row'>
                <button className='col' onClick={ () => {
                        placer();
                    }}>Auto-place</button>
                    <button className='col' onClick={ () => {
                        shipsSet();
                    }}>Start Game</button>
                </div>

           </div>
            
        </div>

    )
}