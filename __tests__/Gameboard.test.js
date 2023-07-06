/* eslint-disable no-undef */
const Gameboard = require('../factories/Gameboard')

describe('Gameboard Functions', () => {
  let testBoard

  beforeEach(() => {
    testBoard = Gameboard()
  })

  it('initialize gameboard with correct cells', () => {
    const arr = []
    for (let i = 0; i < 100; i++) {
      arr.push({ taken: false, hit: false })
    }
    expect(testBoard.board).toEqual(arr)
  })

  it('placing a ship', () => {
    let positionsTaken = true
    const positions = [0, 10, 20, 30, 40]
    testBoard.placeShip(positions, 'Vertical')
    positions.forEach((pos) => {
      if (testBoard.board[pos].taken === false) {
        positionsTaken = false
      }
    })
    // testing taken positions, should be true
    expect(positionsTaken).toBeTruthy()
    // testing untaken positions, taken should === false
    expect(testBoard.board[11]).toEqual({ taken: false, hit: false })
  })

  it('receiveAttack', () => {
    testBoard.placeShip([0, 10, 20, 30, 40])
    testBoard.receiveAttack(10)
    testBoard.receiveAttack(50)
    expect(testBoard.board[10]).toEqual({ taken: true, hit: true })
  })

  it('missed attacks on gameboard', () => {
    testBoard.receiveAttack(43)
    testBoard.receiveAttack(53)
    testBoard.receiveAttack(63)
    expect(testBoard.missedShots).toEqual([43, 53, 63])
  })

  it('all ships sunk', () => {
    testBoard.placeShip([0, 10, 20, 30, 40])
    expect(testBoard.allShipsSunk()).toBeFalsy()
    testBoard.receiveAttack(0)
    testBoard.receiveAttack(10)
    testBoard.receiveAttack(20)
    testBoard.receiveAttack(30)
    testBoard.receiveAttack(40)
    expect(testBoard.allShipsSunk()).toBeTruthy()
  })
})
