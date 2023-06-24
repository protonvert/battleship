const Ship = (length, position) => {
  let hits = 0

  const isSunk = () => {
    if (hits === length) return true
    else return false
  }

  const hit = () => {
    hits++
    return hits
  }

  return {
    isSunk,
    hit
  }
}

module.exports = Ship
