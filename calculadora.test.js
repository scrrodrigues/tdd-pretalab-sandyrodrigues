const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    const calculadora = new Calculadora()
    expect(calculadora.soma(6,4)).toEqual(10)
    
  })

  it('Deverá retornar a subtração de dois números', () => {
    const calculadora = new Calculadora()
    expect(calculadora.subtracao(6,4)).toEqual(2)
    
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    const calculadora = new Calculadora()
    expect(calculadora.multiplicacao(5,5)).toEqual(25)
  })

  it('Deverá retornar a divisao entre dois números', () => {
    const calculadora = new Calculadora()
    expect(calculadora.divisao(2,2)).toEqual(1)
  })
})