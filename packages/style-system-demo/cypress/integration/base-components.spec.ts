context('Box', () => {
  it('Test 1', () => {
    cy.visit('/base-components/box')
  })
})
context('Flex', () => {
  it('Test 2', () => {
    cy.get('[data-test="/base-components/flex"]').click()
  })
})

