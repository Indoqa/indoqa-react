import {assertAlert, assertHeight, assertInnerText, assertMargin, assertPadding, assertStyle, clickEl} from '../utils/utils'

describe('Box samples', () => {
  before(() => {
    clickEl('/base-components/box')
  })

  it('Box with margin, padding and bgContent color', () => {
    assertInnerText('box1', 'Box1')
    assertStyle('box1', 'background-color', 'rgb(63, 81, 181)')
    assertMargin('box1', 9, 0, 8, 0)
    assertPadding('box1', 8, 8, 8, 8)

    assertInnerText('box2', 'Box2')
  })

  it('Box with onClick event', () => {
    assertInnerText('box3', 'Box3')
    assertAlert('box3', 'Box3 clicked')
  })

  it('Responsive styling', () => {
    assertMargin('box8', 0, 0, 0, 0)
    assertPadding('box8', 0, 0, 0, 0)
    assertHeight('box9', 60)
    cy.viewport('iphone-6+')
    assertMargin('box8', 0, 0, 0, 0)
    assertPadding('box8', 8, 8, 8, 8)
    assertHeight('box9', 50)
  })
})

describe('Flex samples', () => {
  before(() => {
    clickEl('/base-components/flex')
  })

  it('Flex 1', () => {
    cy.get('[data-testid="/base-components/flex"]').click()
  })
})
