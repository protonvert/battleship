/* eslint-disable no-undef */
const Ship = require('../factories/Ship.js')

describe('Ship Functions', () => {
  // assign variables to avoid beforeEach scoping issue
  let testCarrier
  beforeEach(() => {
    testCarrier = Ship([0, 1, 2, 3, 4])
  })

  it('ship isSunk', () => {
    testCarrier.hit()
    testCarrier.hit()
    testCarrier.hit()
    testCarrier.hit()
    testCarrier.hit()
    expect(testCarrier.isSunk()).toBe(true)
  })

  it('hit ship', () => {
    testCarrier.hit()
    expect(testCarrier.hits).toEqual(1)
  })
})
