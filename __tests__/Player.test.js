/* eslint-disable no-undef */
const Player = require('../factories/Player')
const Gameboard = require('../factories/Gameboard')

describe('player tests', () => {
  let playerGameBoard
  let computerGameBoard
  let player
  let computer

  beforeEach(() => {
    playerGameBoard = Gameboard()
    computerGameBoard = Gameboard()
    computer = Player('Computer', playerGameBoard, true)
    player = Player('Tristen', computerGameBoard)
  })

  it('player attack on enemy gameboard', () => {
    playerGameBoard.placeShip([30, 20, 10, 0])
    player.takeTurn(30)
    expect(computerGameBoard.board[30]).toEqual({ taken: false, hit: true })
  })
})
