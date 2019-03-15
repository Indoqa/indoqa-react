import {Box, Col, ColRow, Grid} from '@indoqa/style-system'
import * as React from 'react'
import Code from '../code/Code'
import {BlueBox, OrangeBox} from './Boxes'
import codeString from './SimpleGridCode'

const SimpleGrid: React.FC = () => (
  <Box>
    <p>This sample shows a <code>Grid</code> with two rows. The rows render their <code>Col</code>
      components into two rows because the <code>Col</code> sizes are larger than 12 in each case.<br/>
    </p>
    <Grid spacing="0.5rem">
      <ColRow>
        <Col size={4}><OrangeBox/></Col>
        <Col size={4}><OrangeBox/></Col>
        <Col size={4}><OrangeBox/></Col>
        <Col size={6}><OrangeBox/></Col>
        <Col size={2}><OrangeBox/></Col>
        <Col size={2}><OrangeBox/></Col>
        <Col size={2}><OrangeBox/></Col>
      </ColRow>
      <ColRow>
        <Col size={6}><BlueBox/></Col>
        <Col size={4}><BlueBox/></Col>
        <Col size={4}><BlueBox/></Col>
      </ColRow>
    </Grid>
    <Code>{codeString}</Code>
  </Box>
)

export default SimpleGrid
