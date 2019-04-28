import {Box, Col, ColRow, Grid} from '@indoqa/style-system'
import * as React from 'react'
import Code from '../../code/Code'
import {BlueBox, RedBox, UnsetHeightBox} from '../Boxes'
import codeString from './NestedGridColFlexibleHeightCode'

const NestedGridColFlexibleHeight: React.FC = () => {
  const gridSpacing = '0.5rem'
  return (
    <Box>
      <p>This sample shows three nested <code>Grid</code>s. The inner grid
        has multiple columns with different amounts of content. They should all
        be rendered with the same height, which is derived from the highest box.</p>
      <Grid spacing={gridSpacing}>
        <ColRow>
          <Col size={[12, 9]}>
            <Grid spacing={gridSpacing}>
              <ColRow>
                <Col size={6}>
                  <Grid spacing="0.5rem">
                    <ColRow>
                      <Col size={4} testId="col1">
                        <UnsetHeightBox>
                          line<br/>
                          line<br/>
                          line<br/>
                          line<br/>
                          line<br/>
                          line<br/>
                          line<br/>
                        </UnsetHeightBox>
                      </Col>
                      <Col size={4} testId="col2">
                        <UnsetHeightBox>
                          line<br/>
                          line<br/>
                          line<br/>
                        </UnsetHeightBox>
                      </Col>
                      <Col size={4} testId="col3">
                        <UnsetHeightBox/>
                      </Col>
                    </ColRow>
                  </Grid>
                </Col>
                <Col size={6}><RedBox>height: 75px</RedBox></Col>
              </ColRow>
            </Grid>
          </Col>
          <Col size={[12, 3]}>
            <BlueBox/>
          </Col>
        </ColRow>
      </Grid>
      <Code>{codeString}</Code>
    </Box>
  )
}

export default NestedGridColFlexibleHeight
