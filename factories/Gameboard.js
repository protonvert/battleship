const Ship = require('./Ship')
const firstDigit = require('../helpers/Utility')

const Gameboard = () => {
  // ------------------------- Functions -------------------------

  // place ships at specific coordinates by calling ship factory function
  const generateBoard = () => {
    const arr = []
    for (let i = 0; i < 100; i++) {
      arr.push({ taken: false, hit: false })
    }
    return arr
  }

  // check if ship is at the location receiving the attack, return that ship
  const checkShipPositions = (pos) => {
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].positions.includes(pos)) return ships[i]
    }
  }

  const setCoordinatesToTaken = (coordinates) => {
    coordinates.forEach((pos) => {
      board[pos].taken = true
    })
  }

  const placeShip = (coordinates, direction) => {
    if (coordinatesWithinBoundaryAndNotTaken(coordinates, direction) === true) {
      setCoordinatesToTaken(coordinates)
      ships.push(Ship(coordinates))
      console.log(ships)
    } else {
      console.log('nah')
    }
  }

  const coordinatesWithinBoundaryAndNotTaken = (coordinates, direction) => {
    let coordinatesValid = true
    if (direction === 'Vertical') {
      for (let i = 0; i < coordinates.length; i++) {
        if (coordinates[i] >= 100 || coordinates[i] < 0 || board[i].taken === true) {
          coordinatesValid = false
        }
      }
    } else if (direction === 'Horizontal') {
      const firstDigitInCoordinates = firstDigit(coordinates[0])
      for (let i = 0; i < coordinates.length; i++) {
        if (firstDigit(coordinates[i]) !== firstDigitInCoordinates) {
          coordinatesValid = false
        }
      }
    }
    console.log('DIRECTION: ', direction)
    return coordinatesValid
  }

  const receiveAttack = (coordinates) => {
    if (board[coordinates].taken === false) {
      missedShots.push(coordinates)
      board[coordinates].hit = true
    } else {
      board[coordinates].hit = true
      const damagedShip = checkShipPositions(coordinates)
      damagedShip.hit()
      return damagedShip
    }
  }

  const allShipsSunk = () => {
    for (let i = 0; i < ships.length; i++) {
      if (!ships[i].isSunk()) return false
    }
    return true
  }
  // ------------------------- Variables -------------------------
  const board = generateBoard()
  const missedShots = []
  const ships = []

  return {
    get board () {
      return board
    },
    placeShip,
    receiveAttack,
    allShipsSunk,
    get missedShots () {
      return missedShots
    }
  }
}

module.exports = Gameboard
