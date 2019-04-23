import {clickEl, getEl} from '../utils/utils'

describe('Grid Col samples', () => {
  it('Responsive (desktop)', () => {
    clickEl('/grid-with-col/responsive')
    getEl('col1').then(($col1) => {
      getEl('col2').then(($col2) => {
        assert.equal($col1.position().top, $col2.position().top, 'Col1 and col2 have to be in the same row.')
      })
      getEl('col3').then(($col3) => {
        assert.equal($col1.position().top, $col3.position().top, 'Col1 and col3 have to be in the same row.')
      })
      getEl('col4').then(($col4) => {
        assert.equal($col1.position().top, $col4.position().top, 'Col1 and col4 have to be in the same row.')
      })
      getEl('col5').then(($col5) => {
        assert.equal($col1.position().top, $col5.position().top, 'Col1 and col5 have to be in the same row.')
      })
      getEl('col6').then(($col6) => {
        assert.equal($col1.position().top, $col6.position().top, 'Col1 and col6 have to be in the same row.')
      })
    })
  })

  it('Responsive (tablet)', () => {
    clickEl('/grid-with-col/responsive')
    cy.viewport('ipad-2')
    getEl('col1').then(($col1) => {
      getEl('col2').then(($col2) => {
        assert.equal($col1.position().top, $col2.position().top, 'Col1 and col2 have to be in the same row.')
      })
      getEl('col3').then(($col3) => {
        assert.equal($col1.position().top, $col3.position().top, 'Col1 and col3 have to be in the same row.')
      })
      getEl('col4').then(($col4) => {
        assert.isBelow($col1.position().top, $col4.position().top, 'Col1 has to be above of Col4.')
      })
    })
    getEl('col4').then(($col4) => {
      getEl('col5').then(($col5) => {
        assert.equal($col4.position().top, $col5.position().top, 'Col1 and col5 have to be in the same row.')
      })
      getEl('col6').then(($col6) => {
        assert.equal($col4.position().top, $col6.position().top, 'Col1 and col6 have to be in the same row.')
      })
    })
  })

  it('Responsive (mobile)', () => {
    clickEl('/grid-with-col/responsive')
    cy.viewport('iphone-6+')
    getEl('col1').then(($col1) => {
      getEl('col2').then(($col2) => {
        assert.equal($col1.position().top, $col2.position().top, 'Col1 and col2 have to be in the same row.')
      })
      getEl('col3').then(($col3) => {
        assert.isBelow($col1.position().top, $col3.position().top, 'Col1 has to be above of Col3.')
      })
    })
    getEl('col3').then(($col3) => {
      getEl('col4').then(($col4) => {
        assert.equal($col3.position().top, $col4.position().top, 'Col3 and col4 have to be in the same row.')
      })
      getEl('col5').then(($col5) => {
        assert.isBelow($col3.position().top, $col5.position().top, 'Col3 has to be above of Col5.')
      })
    })
    getEl('col5').then(($col5) => {
      getEl('col6').then(($col6) => {
        assert.equal($col5.position().top, $col6.position().top, 'Col5 and col6 have to be in the same row.')
      })
    })
  })

  it('Nested - flexible height', () => {
    clickEl('/grid-with-col/nested-flexible-height')
    getEl('col1').then(($col1) => {
      getEl('col2').then(($col2) => {
        assert.equal($col1.height(), $col2.height(), 'Col1 and col2 have to be of equal height.')
      })
      getEl('col3').then(($col3) => {
        assert.equal($col1.height(), $col3.height(), 'Col1 and col3 have to be of equal height.')
      })
    })
  })
})

