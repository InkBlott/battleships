import {boardFactory} from '../gameLogic/boardFactory'
import {shipFactory} from '../gameLogic/shipFactory'


test('place ship horizontally & vertically if not within bounds of another ship', () => {
    const board = boardFactory();
    const ship = shipFactory(4);
    const ship2 = shipFactory(2);
    const ship3 = shipFactory(3);
    const ship4 = shipFactory(1);
    board.makeBoard();
    board.placeShip(ship, 6, 4);
    expect(board.board[6][7] && board.board[6][4]).toBe(ship);
    board.placeShip(ship2, 4, 8);
    expect(board.board[5][8]).toBe('x');
    board.setVertical();
    board.placeShip(ship3, 0, 9);
    expect(board.board[0][9] && board.board[2][9]).toBe(ship3);
    board.placeShip(ship4, 1 ,1 );
    expect(board.board[1][1]).toBe(ship4);
})

test('Set vertical or horizontal', () => {
    const board = boardFactory();
    expect(board.getVertical()).toBe(false);
    board.setVertical();
    expect(board.getVertical()).toBe(true);
})

test('Get filled board to be empty', () => {
    const board = boardFactory();
    board.makeBoard();
    const ship = shipFactory(1);
    board.placeShip(ship, 2, 2);
    board.clearBoard();
    expect(board.board[2][2]).toBe(undefined);
})

test('Ship gets hit at specified coords, gets sunk if all areas hit', () => {
    const board=boardFactory();
    board.makeBoard();
    const ship = shipFactory(2);
    board.placeShip(ship, 2, 2);
    console.log((board.board).indexOf(ship));
    board.receiveAttack(2, 3);
    board.receiveAttack(2,2);
    expect(ship.getLives()).toEqual(['x', 'x']);
    expect(ship.isSunk()).toBe(true);
    console.table(board.board);
})


