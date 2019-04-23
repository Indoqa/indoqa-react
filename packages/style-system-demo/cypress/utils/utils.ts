export const clickEl = (navPath: string) => {
  cy.get(`[data-test="${navPath}"]`).click()
}

export const assertStyle = (el: string, cssProp: string, cssValue: string) => {
  cy.get(`[data-test="${el}"]`).should('have.css', cssProp, cssValue)
}

export const assertInnerText = (el: string, value: string) => {
  cy.get(`[data-test="${el}"]`).contains(value)
}

export const assertMargin = (el: string, top: number, right: number, bottom: number, left: number) => {
  cy.get(`[data-test="${el}"]`).should('have.css', 'margin-top', `${top}px`)
  cy.get(`[data-test="${el}"]`).should('have.css', 'margin-right', `${right}px`)
  cy.get(`[data-test="${el}"]`).should('have.css', 'margin-bottom', `${bottom}px`)
  cy.get(`[data-test="${el}"]`).should('have.css', 'margin-left', `${left}px`)
}

export const assertPadding = (el: string, top: number, right: number, bottom: number, left: number) => {
  cy.get(`[data-test="${el}"]`).should('have.css', 'padding-top', `${top}px`)
  cy.get(`[data-test="${el}"]`).should('have.css', 'padding-right', `${right}px`)
  cy.get(`[data-test="${el}"]`).should('have.css', 'padding-bottom', `${bottom}px`)
  cy.get(`[data-test="${el}"]`).should('have.css', 'padding-left', `${left}px`)
}

export const assertAlert = (el: string, expectedMessage: string) => {
  const stub: any = cy.stub()
  cy.on('window:alert', stub)
  cy.get(`[data-test="${el}"]`).click().then(() => {
    expect(stub.getCall(0)).to.be.calledWith(expectedMessage)
  })
  clickEl(el)
}
