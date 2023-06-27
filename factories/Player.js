const Player = (name, enemyGameboard, computer = false) => {
  // attack enemy gameboard
  const takeTurn = (attackLocation = computerRandomAttack()) => {
    // if player is computer, generate random location for attack
    if (
      enemyGameboard.board[attackLocation].hit === false &&
      !enemyGameboard.missedShots.includes(attackLocation)
    ) {
      enemyGameboard.receiveAttack(attackLocation)
      return enemyGameboard.board[attackLocation]
    } else if (computer === true) {
      takeTurn()
    }
    return enemyGameboard.board[attackLocation]
  }

  const computerRandomAttack = () => {
    return Math.floor(Math.random() * 100)
  }

  return {
    takeTurn
  }
}

module.exports = Player
