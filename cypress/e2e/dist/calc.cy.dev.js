"use strict";

describe('template spec', function () {
  it('should get 3 after adding 1 and 2', function () {
    cy.visit('http://127.0.0.1:5500/index.html');
    var numberOne = cy.get(':nth-child(12)');
    numberOne.click();
    var plus = cy.get(':nth-child(15)');
    plus.click();
    var numberTwo = cy.get(':nth-child(13)');
    numberTwo.click();
    var equals = cy.get('.equal');
    equals.click();
    var display = cy.get('.display-2');
    display.should("contain", 3);
  });
  it('should get -6 after subtracting 9 from 3', function () {
    cy.visit('http://127.0.0.1:5500/index.html');
    var numberThree = cy.get(':nth-child(14)');
    numberThree.click();
    var minus = cy.get(':nth-child(11)');
    minus.click();
    var numberNine = cy.get('.calculator__buttons > :nth-child(6)');
    numberNine.click();
    var equals = cy.get('.equal');
    equals.click();
    var display = cy.get('.display-2');
    display.should("contain", -6);
  });
  it('should get 24 after multiplying 6 with 4', function () {
    cy.visit('http://127.0.0.1:5500/index.html');
    var numberSix = cy.get(':nth-child(10)');
    numberSix.click();
    var multiply = cy.get(':nth-child(7)');
    multiply.click();
    var numberFour = cy.get(':nth-child(8)');
    numberFour.click();
    var equals = cy.get('.equal');
    equals.click();
    var display = cy.get('.display-2');
    display.should("contain", 24);
  });
  it('should get 5 after dividing 55 by 11', function () {
    cy.visit('http://127.0.0.1:5500/index.html');
    var numberFive = cy.get(':nth-child(9)');
    numberFive.click();
    numberFive.click();
    var divide = cy.get('.calculator__buttons > :nth-child(3)');
    divide.click();
    var numberOne = cy.get(':nth-child(12)');
    numberOne.click();
    var equals = cy.get('.equal');
    equals.click();
    var display = cy.get('.display-2');
    display.should("contain", 5);
  });
  it('should delete the previous number when the DEL button is used', function () {
    cy.visit('http://127.0.0.1:5500/index.html');
    var numberOne = cy.get(':nth-child(12)');
    numberOne.click();
    var numberTwo = cy.get(':nth-child(13)');
    numberTwo.click();
    var numberThree = cy.get(':nth-child(14)');
    numberThree.click(); //const display = cy.get('.display-2')
    //display.should("contain",123)

    var delButton = cy.get('.delete');
    delButton.click();
    var display = cy.get('.display-2');
    display.should("contain", 12); // delButton.click()
    // display.should("contain",1)
  });
  it('should store a number in the upper display once an operation has been used', function () {
    cy.visit('http://127.0.0.1:5500/index.html');
    var numberOne = cy.get(':nth-child(12)');
    numberOne.click();
    var multiply = cy.get(':nth-child(7)');
    multiply.click();
    var display = cy.get('.display-1');
    display.should("contain", 1);
  });
  it('should be able to complete operations with decimals', function () {
    cy.visit('http://127.0.0.1:5500/index.html');
    var numberOne = cy.get(':nth-child(12)');
    numberOne.click();
    var decimal = cy.get('.dot');
    decimal.click();
    var numberThree = cy.get(':nth-child(14)');
    numberThree.click();
    var multiply = cy.get(':nth-child(7)');
    multiply.click();
    numberThree.click();
    decimal.click();
    numberOne.click();
    var equals = cy.get('.equal');
    equals.click();
    var display = cy.get('.display-2');
    display.should("contain", 4.03); //expect(display).to.equal(4.03)
  });
  it('should be able to complete equation with multiple operations', function () {
    cy.visit('http://127.0.0.1:5500/index.html');
    var numberOne = cy.get(':nth-child(12)');
    numberOne.click();
    var multiply = cy.get(':nth-child(7)');
    multiply.click();
    var numberTwo = cy.get(':nth-child(13)');
    numberTwo.click();
    multiply.click();
    var numberThree = cy.get(':nth-child(14)');
    numberThree.click();
    var equals = cy.get('.equal');
    equals.click();
    var display = cy.get('.display-2');
    display.should("contain", 6);
  });
  it('should be able to complete equation with multiple different operations', function () {
    cy.visit('http://127.0.0.1:5500/index.html');
    var numberOne = cy.get(':nth-child(12)');
    numberOne.click();
    var plus = cy.get(':nth-child(15)');
    plus.click();
    var numberTwo = cy.get(':nth-child(13)');
    numberTwo.click();
    var multiply = cy.get(':nth-child(7)');
    multiply.click();
    var numberThree = cy.get(':nth-child(14)');
    numberThree.click();
    var equals = cy.get('.equal');
    equals.click();
    var display = cy.get('.display-2');
    display.should("contain", 7);
  });
});