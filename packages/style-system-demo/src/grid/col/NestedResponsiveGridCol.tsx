import {Box, Col, ColRow, Grid} from '@indoqa/style-system'
import * as React from 'react'
import Code from '../../code/Code'
import {BlueBox, OrangeBox, YellowBox} from '../Boxes'
import codeString from './NestedResponsiveGridColCode'

const InnerGrid1: React.FC = () => (
  <Grid spacing="0.5rem">
    <ColRow>
      <Col size={[6, 3]}><OrangeBox/></Col>
      <Col size={[6, 3]}><OrangeBox/></Col>
      <Col size={[6, 3]}><OrangeBox/></Col>
      <Col size={[6, 3]}><OrangeBox/></Col>
    </ColRow>
    <ColRow>
      <Col size={[6, 3]}><OrangeBox/></Col>
      <Col size={[6, 3]}><OrangeBox/></Col>
      <Col size={[6, 3]}><OrangeBox/></Col>
      <Col size={[6, 3]}><OrangeBox/></Col>
    </ColRow>
  </Grid>
)

const InnerGrid2: React.FC = () => (
  <Grid spacing="0.5rem">
    <ColRow>
      <Col size={4}><YellowBox/></Col>
      <Col size={4}><YellowBox/></Col>
      <Col size={4}><YellowBox/></Col>
    </ColRow>
  </Grid>
)

const NestedResponsiveGridCol: React.FC = () => {
  return (
    <Box>
      <p>This sample shows a <code>Grid</code> which contains two nested grids with responsive sizes of
        the <code>Col</code> components. For mobile and tablet sized devices, the first column
        takes the full widths (12 of 12), desktop screens</p>
      <Grid spacing="0.5rem">
        <ColRow>
          <Col size={[12, 12, 6]}>
            <InnerGrid1/>
          </Col>
          <Col size={[12, 12, 6]}>
            <InnerGrid2/>
          </Col>
        </ColRow>
        <ColRow>
          <Col>
            <BlueBox/>
          </Col>
        </ColRow>
      </Grid>
      <Code>{codeString}</Code>
    </Box>
  )
}

export default NestedResponsiveGridCol
