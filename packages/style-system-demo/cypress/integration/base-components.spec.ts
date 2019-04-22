context('Base components', () => {
  it('Box', () => {
    cy.viewport(1200, 1200)
    cy.visit('/base-components/box')
    expect(true).to.equal(true)
  })
  it('Flex', () => {
    cy.viewport(1200, 1200)
    cy.visit('/base-components/flex')
    expect(true).to.equal(true)
  })
})
