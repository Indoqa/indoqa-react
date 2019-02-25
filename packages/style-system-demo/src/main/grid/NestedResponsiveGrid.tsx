import {Box, Col, ColRow, Grid} from '@indoqa/style-system'
import * as React from 'react'
import Code from '../code/Code'
import {Box1, Box2, Box3} from './Boxes'
import codeString from './NestedResponsiveGridCode'

const NestedResponsiveGrid: React.FC = () => {
  return (
    <Box>
      <p>This sample shows a <code>Grid</code> which contains two nested grids with responsive sizes of
        the <code>Col</code> components:</p>
      <Grid spacing="0.5rem">
        <ColRow>
          <Col size={[12, 12, 6]}>
            <Grid spacing="0.5rem">
              <ColRow>
                <Col size={[6, 3]}><Box1/></Col>
                <Col size={[6, 3]}><Box1/></Col>
                <Col size={[6, 3]}><Box1/></Col>
                <Col size={[6, 3]}><Box1/></Col>
              </ColRow>
              <ColRow>
                <Col size={[6, 3]}><Box1/></Col>
                <Col size={[6, 3]}><Box1/></Col>
                <Col size={[6, 3]}><Box1/></Col>
                <Col size={[6, 3]}><Box1/></Col>
              </ColRow>
            </Grid>
          </Col>
          <Col size={[12, 12, 6]}>
            <Grid spacing="0.5rem">
              <ColRow>
                <Col size={4}><Box2/></Col>
                <Col size={4}><Box2/></Col>
                <Col size={4}><Box2/></Col>
              </ColRow>
            </Grid>
          </Col>
        </ColRow>
        <ColRow>
          <Col><Box3/></Col>
        </ColRow>
      </Grid>
      <Code>{codeString}</Code>
    </Box>
  )
}

export default NestedResponsiveGrid
