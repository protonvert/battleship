/* eslint-disable no-undef */
const Ship = require('../factories/Ship.js')

describe('Ship Functions', () => {
  // assign variables to avoid beforeEach scoping issue
  let testCarrier

  beforeEach(() => {
    testCarrier = Ship(5, [0, 1, 2, 3, 4])
  })

  it('ship isSunk', () => {
    expect(testCarrier.isSunk()).toBe(false)
  })

  it('hit ship', () => {
    expect(testCarrier.hit(0)).toEqual(1)
  })
})
