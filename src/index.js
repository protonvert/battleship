import './styles.less'
const Player = require('../factories/Player')
const Gameboard = require('../factories/Gameboard')
const DisplayController = require('../helpers/DisplayController')

const display = DisplayController()
const playerGameboard = Gameboard()
const computerGameboard = Gameboard()

const player = Player('Player', computerGameboard)
const computer = Player('CPU', playerGameboard, true)

let direction = 'Vertical'

let shipPlacementIterator = 0

const applyGameStartEventListeners = () => {
  const gameboardRight = document.querySelector('.gameboard--right')
  const gameboardChildren = gameboardRight.children
  for (let i = 0; i < gameboardChildren.length; i++) {
    gameboardChildren[i].addEventListener('click', () => {
      if (computerGameboard.board[i].hit === false) {
        player.takeTurn(i)
        computer.takeTurn()
        if (computerGameboard) {
          display.updateComputerBoard(computerGameboard.board)
          display.updatePlayerBoard(playerGameboard.board)
        }
      }
    })
  }
}

display.initializeGameboards()

const pickShipPositions = () => {
  const gameboardLeft = document.querySelector('.gameboard--left')
  const gameboardChildren = gameboardLeft.children
  for (let i = 0; i < gameboardChildren.length; i++) {
    gameboardChildren[i].addEventListener('click', () => {
      const arr = []
      if (direction === 'Vertical') {
        for (let j = 0; j < Object.values(shipOffsetsVertical)[shipPlacementIterator].length; j++) {
        // console.log(i - j)
          console.log(Object.values(shipOffsetsVertical)[shipPlacementIterator][j] + i)
          arr.push(Object.values(shipOffsetsVertical)[shipPlacementIterator][j] + i)
        }
      } else if (direction === 'Horizontal') {
        for (let j = 0; j < Object.values(shipOffsetsHorizontal)[shipPlacementIterator].length; j++) {
          // console.log(i - j)
          console.log(Object.values(shipOffsetsHorizontal)[shipPlacementIterator][j] + i)
          arr.push(Object.values(shipOffsetsHorizontal)[shipPlacementIterator][j] + i)
        }
      }

      shipPlacementIterator++
      playerGameboard.placeShip(arr, direction)
      display.updatePlayerBoard(playerGameboard.board)
    })
  }
}
document.querySelector('.add-ship--direction').addEventListener('click', () => {
  if (direction === 'Vertical') direction = 'Horizontal'
  else direction = 'Vertical'
})

pickShipPositions()
applyGameStartEventListeners() // allows attacks to be sent
display.updatePlayerBoard(playerGameboard.board)
display.updateComputerBoard(computerGameboard.board)

const shipOffsetsVertical = {
  Carrier: [0, 10, 20, 30, 40],
  Battleship: [0, 10, 20, 30],
  Destroyer: [0, 10, 20],
  Submarine: [0, 10, 20],
  PatrolBoat: [0, 10]
}

const shipOffsetsHorizontal = {
  Carrier: [0, -1, -2, -3, -4],
  Battleship: [0, -1, -2, -3],
  Destroyer: [0, -1, -2],
  Submarine: [0, -1, -2],
  PatrolBoat: [0, -1]
}
