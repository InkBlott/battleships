import React from 'react';
import '../styles/Styles.css';

export default function GameInfoTable({ isV, rotate }) {

    function drag(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function getClass() {
        if (isV) {
            return 'col'
        } else return 'row'

    }

    return (

        <div className='col-md infoContainer'>
            <div className='row subT'>Place your ships:</div>

            <div className='row'>
                <div id='ShipPlacer.4' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>

                </div>
                <div id='ShipPlacer.3' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>

                </div>
                <div id='ShipPlacer.3' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>
                </div>

                <div id='ShipPlacer.2' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>
                </div>
                <div id='ShipPlacer.2' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>
                </div>
                <div id='ShipPlacer.2' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>
                </div>
                <div id='ShipPlacer.1' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>
                </div>
                <div id='ShipPlacer.1' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>
                </div>
                <div id='ShipPlacer.1' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>
                </div>
                <div id='ShipPlacer.1' className='col placerContainer' draggable='true' onDragStart={(e) => drag(e)}>
                    <div className={getClass() + ' blr'}>
                        <div className={'col boardButton ship placer noHover'}></div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <button onClick={ () => {
                    rotate();
                    console.log(isV)
                }}>Rotate</button>

            </div>
        </div>

    )
}