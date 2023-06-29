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
  }

  const createGameboardSquares = (gameboard) => {
    for (let i = 0; i < 100; i++) {
      const square = document.createElement('div')
      square.classList.add('game-square')
      square.setAttribute('id', `sqaure${i}`)
      gameboard.appendChild(square)
    }
  }

  const updateSquaresOnClick = (userGameboard) => {
    updateGameboardSquares(gameboardLeft, userGameboard)
  }

  const updateGameboardSquares = (gameboardElement, userGameboard) => {
    let user = 'player'
    // for each element of the gameboard (not the DOM element)
    if (gameboardElement === gameboardRight) {
      user = 'computer'
    }
    const board = userGameboard
    const gameboardChildren = gameboardElement.children
    for (let i = 0; i < userGameboard.length; i++) {
      if (board[i].taken === true) {
        // add taken class to make it green
        gameboardChildren[i].classList.add('taken')
      }
      if (board[i].hit === true) {
        gameboardChildren[i].classList.add('hit')
      }
    }
  }

  const displayGameBoards = () => {
    mainContainer.append(gameboards)
  }

  return { initializeGameboards, updateSquaresOnClick }
}

module.exports = DisplayController
