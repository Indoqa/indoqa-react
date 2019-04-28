export const getEl = (el: string) => {
  return cy.get(`[data-testid="${el}"]`)
}

export const clickEl = (navPath: string) => {
  return getEl(navPath).click()
}

export const assertStyle = (el: string, cssProp: string, cssValue: string) => {
  getEl(el).should('have.css', cssProp, cssValue)
}

export const assertInnerText = (el: string, value: string) => {
  getEl(el).contains(value)
}

export const assertMargin = (el: string, top: number, right: number, bottom: number, left: number) => {
  getEl(el).should('have.css', 'margin-top', `${top}px`)
  getEl(el).should('have.css', 'margin-right', `${right}px`)
  getEl(el).should('have.css', 'margin-bottom', `${bottom}px`)
  getEl(el).should('have.css', 'margin-left', `${left}px`)
}

export const assertPadding = (el: string, top: number, right: number, bottom: number, left: number) => {
  getEl(el).should('have.css', 'padding-top', `${top}px`)
  getEl(el).should('have.css', 'padding-right', `${right}px`)
  getEl(el).should('have.css', 'padding-bottom', `${bottom}px`)
  getEl(el).should('have.css', 'padding-left', `${left}px`)
}

export const assertAlert = (el: string, expectedMessage: string) => {
  const stub: any = cy.stub()
  cy.on('window:alert', stub)
  clickEl(el).then(() => {
    expect(stub.getCall(0)).to.be.calledWith(expectedMessage)
  })
  clickEl(el)
}
