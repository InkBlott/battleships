import {boardFactory} from '../gameLogic/boardFactory'
import {shipFactory} from '../gameLogic/shipFactory'


test('place ship horizontally', () => {
    const board = boardFactory();
    const ship = shipFactory(4)
    const ship2 = shipFactory(2);
    board.makeBoard();
    board.placeShip(ship, 6, 4);
    expect(board.board[6][7] && board.getBoard[6][4]).toBe(0);
    board.placeShip(ship2, 6, 7)
    expect(board.board[6][8]).toBe(undefined);
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
    console.log(board.getVertical());
    board.placeShip(ship, 3, 8);
    console.table(board.board);
    expect(board.board[3][8] && board.board[3][10]).toBe(0);
})



test('Get filled board to be empty', () => {
    const board = boardFactory();
    board.makeBoard();


})



test('board', () => {
    const board = boardFactory();
    board.makeBoard();
    board.board[4][6] = 'x';
    // console.table(board.board);
})


