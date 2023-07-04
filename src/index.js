import './styles.less'
const Player = require('../factories/Player')
const Gameboard = require('../factories/Gameboard')
const DisplayController = require('../helpers/DisplayController')

const display = DisplayController()
const playerGameboard = Gameboard()
const computerGameboard = Gameboard()

const player = Player('Player', computerGameboard)
const computer = Player('CPU', playerGameboard, true)

display.initializeGameboards()
/* ----------------------- place ships ----------------------- */

const gameboardRight = document.querySelector('.gameboard--right')
const gameboardChildren = gameboardRight.children
for (let i = 0; i < gameboardChildren.length; i++) {
  gameboardChildren[i].addEventListener('click', () => {
    if (computerGameboard.board[i].hit === false) {
      player.takeTurn(i)
      computer.takeTurn()
      if (computerGameboard) {
        display.updateComputerBoard(computerGameboard.board)
        display.updatePlayerSquares(playerGameboard.board)
      }
    }
  })
}

display.updatePlayerSquares(playerGameboard.board)
display.updateComputerBoard(computerGameboard.board)
