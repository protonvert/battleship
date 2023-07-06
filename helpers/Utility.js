function firstDigit (num) {
  // 1: get first digit using regex pattern
  const matches = String(num).match(/\d/)
  // 2: convert matched item to integer
  const digit = Number(matches[0])
  // 3: add sign back as needed
  return (num < 0) ? -digit : digit
}

module.exports = firstDigit
