import {Box, Col, ColRow, Grid} from '@indoqa/style-system'
import * as React from 'react'
import Code from '../code/Code'
import {BlueBox, OrangeBox, RedBox, YellowBox} from './Boxes'
import codeString from './NestedGridCode'

const NestedGrid: React.FC = () => {
  const gridSpacing = '0.5rem'
  return (
    <Box>
      <p>This sample shows three nested <code>Grid</code>s:</p>
      <Grid spacing={gridSpacing}>
        <ColRow>
          <Col size={9}>
            <Grid spacing={gridSpacing}>
              <ColRow>
                <Col size={4}><OrangeBox/></Col>
                <Col size={4}><OrangeBox/></Col>
                <Col size={4}><OrangeBox/></Col>
              </ColRow>
              <ColRow>
                <Col size={6}>
                  <Grid spacing="0.5rem">
                    <ColRow>
                      <Col size={4}><YellowBox/></Col>
                      <Col size={4}><YellowBox/></Col>
                      <Col size={4}><YellowBox/></Col>
                    </ColRow>
                  </Grid>
                </Col>
                <Col size={6}><RedBox/></Col>
              </ColRow>
            </Grid>
          </Col>
          <Col size={3}>
            <BlueBox/>
          </Col>
        </ColRow>
      </Grid>
      <Code>{codeString}</Code>
    </Box>
  )
}

export default NestedGrid
