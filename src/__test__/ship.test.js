import {shipFactory} from '../gameLogic/shipFactory'

// import { render, screen } from '@testing-library/react';
// import App from './App';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('returns ship of length 3', () => {
  expect(shipFactory(3).getLength()).toBe(3);
})

test('return length 4 if provided >4', () => {
  expect(shipFactory(5).getLength()).toBe(4);
})

test('return length 1 if provided <1', () => {
  expect(shipFactory(0).getLength()).toBe(1);
})

test('hit area returns where the ship was hit', () =>{
  const ship = shipFactory(3);
  ship.hitArea(2);  
  expect(ship.getLives()).toEqual([undefined, 'x',])
})

test('ship can\'t be hit outside ship area', () =>{
  const ship = shipFactory(1);
  ship.hitArea(6);  
  expect(ship.getLives()).toEqual([])
})

test('Ship sinks if all areas hit', ()=>{
  const ship = shipFactory(1);
  ship.hitArea(1);
  expect(ship.isSunk()).toBe(true);
})
