const Ship = require('./Ship')

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

  const placeShip = (coordinates) => {
    if (coordinatesWithinBoundaryAndNotTaken(coordinates) === true) {
      setCoordinatesToTaken(coordinates)
      ships.push(Ship(coordinates))
    }
  }

  const coordinatesWithinBoundaryAndNotTaken = (coordinates) => {
    let coordinatesValid = true
    for (let i = 0; i < coordinates; i++) {
      if (coordinates[i] >= 100 || coordinates[i] < 0 || board[i].taken === true) {
        coordinatesValid = false
      }
    }
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
