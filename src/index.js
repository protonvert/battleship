import './styles.less'
const Player = require('../factories/Player')
const Gameboard = require('../factories/Gameboard')
const DisplayController = require('../helpers/DisplayController')

const playerGameboard = Gameboard()
const computerGameboard = Gameboard()

const player = Player('Player', computerGameboard)
const computer = Player('CPU', playerGameboard, true)
const display = DisplayController()

// tests //
computer.takeTurn(0)
player.takeTurn(3)

display.initializeGameboards()
display.updateGameboardSquares(playerGameboard.board)
display.updateGameboardSquares(gameboardRight)

const gameStart = () => {
  // create both players, assign gameboards

  // pre place ships

  // display controller generate boards and assign each square a value to the gameboard
}
