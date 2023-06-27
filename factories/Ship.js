const Ship = (positions) => {
  let hits = 0
  const length = positions.length

  const isSunk = () => {
    if (hits === length) return true
    else return false
  }

  const hit = () => {
    hits++
  }

  return {
    isSunk,
    hit,
    positions,
    get hits () { return hits }
  }
}

module.exports = Ship
