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
    expect(board.board[6][7] && board.board[6][4]).toBe(0);
    board.placeShip(ship2, 4, 8);
    expect(board.board[5][8]).toBe('x');
    board.setVertical();
    board.placeShip(ship3, 0, 9);
    expect(board.board[0][9] && board.board[2][9]).toBe(0);
    board.placeShip(ship4, 1 ,1 );
    console.table(board.board);
    expect(board.board[1][1]).toBe(0);
})

test('Set vertical or horizontal', () => {
    const board = boardFactory();
    expect(board.getVertical()).toBe(false);
    board.setVertical();
    expect(board.getVertical()).toBe(true);
})

test('place ship vertically', () =>{
    const board = boardFactory();
    const ship = shipFactory(3)
    board.makeBoard();
    board.setVertical();
    board.placeShip(ship, 3, 8);
    expect(board.board[3][8] && board.board[3][10]).toBe(0);
})



test('Get filled board to be empty', () => {
    const board = boardFactory();
    board.makeBoard();
    const ship = shipFactory(1);
    board.placeShip(ship, 2, 2);
    board.clearBoard();
    expect(board.board[2][2]).toBe(undefined);
})


test('board', () => {
    const board = boardFactory();
    board.makeBoard();
    board.board[4][6] = 'x';
    // console.table(board.board);
})


