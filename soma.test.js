const soma = require('./soma')

describe('Soma', () => {
  it('deverá somar dois números inteiros', () => {
    expect(soma(6,4)).toBe(10)
  })
})