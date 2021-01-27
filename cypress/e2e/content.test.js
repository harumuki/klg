/// <reference types="Cypress" />

describe("Content presence", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Has logo in navigation", () => {
    cy.get('[data-test=logo]').should('contain', 'Trần Thùy Chinh')
  })
})
