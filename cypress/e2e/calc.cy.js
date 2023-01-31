describe('template spec', () => {
  
  it('should get 3 after adding 1 and 2', () => {
    cy.visit('http://127.0.0.1:5500/index.html')

    const numberOne = cy.get(':nth-child(12)')
    numberOne.click()
    const plus = cy.get(':nth-child(15)')
    plus.click()
    const numberTwo = cy.get(':nth-child(13)')
    numberTwo.click()
    const equals = cy.get('.equal')
    equals.click()

    const display = cy.get('.display-2')
    display.should("contain",3)

  })

  it('should get -6 after subtracting 9 from 3', () => {
    cy.visit('http://127.0.0.1:5500/index.html')

    const numberThree = cy.get(':nth-child(14)')
    numberThree.click()
    const minus = cy.get(':nth-child(11)')
    minus.click()
    const numberNine = cy.get('.calculator__buttons > :nth-child(6)')
    numberNine.click()
    const equals = cy.get('.equal')
    equals.click()

    const display = cy.get('.display-2')
    display.should("contain",-6)
  })

  it('should get 24 after multiplying 6 with 4', () => {
    cy.visit('http://127.0.0.1:5500/index.html')

    const numberSix = cy.get(':nth-child(10)')
    numberSix.click()
    const multiply = cy.get(':nth-child(7)')
    multiply.click()
    const numberFour = cy.get(':nth-child(8)')
    numberFour.click()
    const equals = cy.get('.equal')
    equals.click()

    const display = cy.get('.display-2')
    display.should("contain",24)
  })

  it('should get 5 after dividing 55 by 11', () => {
    cy.visit('http://127.0.0.1:5500/index.html')

    const numberFive = cy.get(':nth-child(9)')
    numberFive.click()
    numberFive.click()
    const divide = cy.get('.calculator__buttons > :nth-child(3)')
    divide.click()
    const numberOne = cy.get(':nth-child(12)')
    numberOne.click()
    
    const equals = cy.get('.equal')
    equals.click()

    const display = cy.get('.display-2')
    display.should("contain",5)
  })

  it('should delete the previous number when the DEL button is used', () => {
    cy.visit('http://127.0.0.1:5500/index.html')

    const numberOne = cy.get(':nth-child(12)')
    numberOne.click()
  
    const numberTwo = cy.get(':nth-child(13)')
    numberTwo.click()
    
    const numberThree = cy.get(':nth-child(14)')
    numberThree.click()

    //const display = cy.get('.display-2')
    //display.should("contain",123)

    const delButton = cy.get('.delete')
    delButton.click()
    
    const display = cy.get('.display-2')
    display.should("contain",12)

    // delButton.click()
    // display.should("contain",1)
  })

  it('should store a number in the upper display once an operation has been used', () => {
    cy.visit('http://127.0.0.1:5500/index.html')

    const numberOne = cy.get(':nth-child(12)')
    numberOne.click()
  
    const multiply = cy.get(':nth-child(7)')
    multiply.click()
    
     
    const display = cy.get('.display-1')
    display.should("contain",1)
  })

  it('should be able to complete operations with decimals', () => {
    cy.visit('http://127.0.0.1:5500/index.html')

    const numberOne = cy.get(':nth-child(12)')
    numberOne.click()
  
    const decimal = cy.get('.dot')
    decimal.click()

    const numberThree = cy.get(':nth-child(14)')
    numberThree.click()

    const multiply = cy.get(':nth-child(7)')
    multiply.click()

    numberThree.click()
    decimal.click()
    numberOne.click()

    const equals = cy.get('.equal')
    equals.click()
    
    const display = cy.get('.display-2')
    display.should("contain",4.03)
    //expect(display).to.equal(4.03)
  })

  it('should be able to complete equation with multiple operations', () => {
    cy.visit('http://127.0.0.1:5500/index.html')

    const numberOne = cy.get(':nth-child(12)')
    numberOne.click()
  
    const multiply = cy.get(':nth-child(7)')
    multiply.click()

    const numberTwo = cy.get(':nth-child(13)')
    numberTwo.click()
    multiply.click()

    const numberThree = cy.get(':nth-child(14)')
    numberThree.click()
    
    const equals = cy.get('.equal')
    equals.click()

    const display = cy.get('.display-2')
    display.should("contain",6)
  })

  it('should be able to complete equation with multiple different operations', () => {
    cy.visit('http://127.0.0.1:5500/index.html')

    const numberOne = cy.get(':nth-child(12)')
    numberOne.click()
  
    const plus = cy.get(':nth-child(15)')
    plus.click()

    const numberTwo = cy.get(':nth-child(13)')
    numberTwo.click()

    const multiply = cy.get(':nth-child(7)')
    multiply.click()

    const numberThree = cy.get(':nth-child(14)')
    numberThree.click()
    
    const equals = cy.get('.equal')
    equals.click()
    
    const display = cy.get('.display-2')
    display.should("contain",7)
  })

})