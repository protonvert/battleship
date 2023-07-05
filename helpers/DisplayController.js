const DisplayController = () => {
  const mainContainer = document.querySelector('.main-container')

  const gameboardLeft = document.createElement('div')
  gameboardLeft.classList.add('gameboard--left')
  const gameboardRight = document.createElement('div')
  gameboardRight.classList.add('gameboard--right')

  const gameboards = document.createElement('div')
  gameboards.classList.add('gameboards')

  const initializeGameboards = () => {
    gameboards.append(gameboardLeft, gameboardRight)
    createGameboardSquares(gameboardLeft)
    createGameboardSquares(gameboardRight)
    displayGameBoards()
    placeShipDirection()
  }

  const createGameboardSquares = (gameboard) => {
    for (let i = 0; i < 100; i++) {
      const square = document.createElement('div')
      square.classList.add('game-square')
      square.setAttribute('id', `sqaure${i}`)
      gameboard.appendChild(square)
    }
  }

  const updatePlayerBoard = (playerGameboard) => {
    const gameboardDisplayChildren = gameboardLeft.children
    for (let i = 0; i < playerGameboard.length; i++) {
      if (playerGameboard[i].taken === true) {
        // add taken class to make it green
        gameboardDisplayChildren[i].classList.add('taken')
      }
      if (playerGameboard[i].hit === true) {
        gameboardDisplayChildren[i].classList.add('hit')
      }
    }
  }

  const updateComputerBoard = (computerBoard) => {
    const gameboardDisplayChildren = gameboardRight.children
    for (let i = 0; i < computerBoard.length; i++) {
      if (computerBoard[i].taken === true) {
        // add taken class to make it green
        gameboardDisplayChildren[i].classList.add('taken')
      }
      if (computerBoard[i].hit === true) {
        gameboardDisplayChildren[i].classList.add('hit')
      }
    }
  }

  const placeShipDirection = () => {
    const directionButton = document.createElement('button')
    directionButton.classList.add('add-ship--direction')
    directionButton.textContent = 'Vertical'
    directionButton.addEventListener('click', () => {
      if (directionButton.textContent === 'Vertical') {
        directionButton.textContent = 'Horizontal'
      } else {
        directionButton.textContent = 'Vertical'
      }
    })
    mainContainer.appendChild(directionButton)
  }

  const displayGameBoards = () => {
    mainContainer.append(gameboards)
  }

  return { initializeGameboards, updatePlayerBoard, updateComputerBoard, placeShipDirection }
}

module.exports = DisplayController
