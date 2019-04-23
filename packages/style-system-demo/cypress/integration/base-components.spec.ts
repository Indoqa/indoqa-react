const clickEl = (navPath: string) => {
  cy.get(`[data-test="${navPath}"]`).click()
}

const assertStyle = (el: string, cssProp: string, cssValue: string) => {
  cy.get(`[data-test="${el}"]`).should('have.css', cssProp, cssValue)
}

const assertInnerText = (el: string, value: string) => {
  cy.get(`[data-test="${el}"]`).contains(value)
}

const assertMargin = (el: string, top: number, right: number, bottom: number, left: number) => {
  cy.get(`[data-test="${el}"]`).should('have.css', 'margin-top', `${top}px`)
  cy.get(`[data-test="${el}"]`).should('have.css', 'margin-right', `${right}px`)
  cy.get(`[data-test="${el}"]`).should('have.css', 'margin-bottom', `${bottom}px`)
  cy.get(`[data-test="${el}"]`).should('have.css', 'margin-left', `${left}px`)
}

const assertPadding = (el: string, top: number, right: number, bottom: number, left: number) => {
  cy.get(`[data-test="${el}"]`).should('have.css', 'padding-top', `${top}px`)
  cy.get(`[data-test="${el}"]`).should('have.css', 'padding-right', `${right}px`)
  cy.get(`[data-test="${el}"]`).should('have.css', 'padding-bottom', `${bottom}px`)
  cy.get(`[data-test="${el}"]`).should('have.css', 'padding-left', `${left}px`)
}

const assertAlert = (el: string, expectedMessage: string) => {
  const stub: any = cy.stub()
  cy.on('window:alert', stub)
  cy.get(`[data-test="${el}"]`).click().then(() => {
    expect(stub.getCall(0)).to.be.calledWith(expectedMessage)
  })
  clickEl(el)
}


describe('Base components', () => {
  before(() => {
    cy.visit('/')
  })

  describe('Box', () => {
    before(() => {
      clickEl('/base-components/box')
    })

    it('Box with margin, padding and background color', () => {
      assertInnerText('box1', 'Box1')
      assertStyle('box1', 'background-color', 'rgb(63, 81, 181)')
      assertMargin('box1', 16, 0, 16, 0)
      assertPadding('box1', 16, 16, 16, 16)

      assertInnerText('box2', 'Box2')
    })

    it('Box with onClick event', () => {
      assertInnerText('box3', 'Box3')
      assertAlert('box3', 'Box3 clicked')
    })
  })

  describe('Flex', () => {
    before(() => {
      clickEl('/base-components/flex')
    })

    it('Flex 1', () => {
      cy.get('[data-test="/base-components/flex"]').click()
    })
  })
})
