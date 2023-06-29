import './styles.less'
const Player = require('../factories/Player')
const Gameboard = require('../factories/Gameboard')
const DisplayController = require('../helpers/DisplayController')

const display = DisplayController()
const playerGameboard = Gameboard()
const computerGameboard = Gameboard()

const player = Player('Player', computerGameboard)
const computer = Player('CPU', playerGameboard, true)

// tests //
playerGameboard.placeShip([0, 1, 2, 3, 4])
computerGameboard.placeShip([0, 1, 2, 3, 4])

computer.takeTurn(2)
computer.takeTurn(10)
computer.takeTurn(3)
player.takeTurn(3)

display.initializeGameboards()

const gameboardRight = document.querySelector('.gameboard--right')
const gameboardChildren = gameboardRight.children
for (let i = 0; i < gameboardChildren.length; i++) {
  gameboardChildren[i].addEventListener('click', () => {
    player.takeTurn(i)
    if (computerGameboard) {
      display.updateComputerBoard(computerGameboard.board)
    }
  })
}

display.updatePlayerSquares(playerGameboard.board)
display.updateComputerBoard(computerGameboard.board)
