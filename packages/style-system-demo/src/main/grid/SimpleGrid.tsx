import {Box, Col, ColRow, Grid} from '@indoqa/style-system'
import * as React from 'react'
import Code from '../code/Code'
import {Box1, Box3} from './Boxes'
import codeString from './SimpleGridCode'

export default class SimpleGrid extends React.Component {

  public render() {
    return (
      <Box>
        <p>This sample shows a <code>Grid</code> with two rows. The rows render their <code>Col</code>
          components into two rows because the <code>Col</code> sizes are larger than 12 in each case.<br/>
        </p>
        <Grid spacing="0.5rem">
          <ColRow>
            <Col size={4}><Box1/></Col>
            <Col size={4}><Box1/></Col>
            <Col size={4}><Box1/></Col>
            <Col size={6}><Box1/></Col>
            <Col size={2}><Box1/></Col>
            <Col size={2}><Box1/></Col>
            <Col size={2}><Box1/></Col>
          </ColRow>
          <ColRow>
            <Col size={6}><Box3/></Col>
            <Col size={4}><Box3/></Col>
            <Col size={4}><Box3/></Col>
          </ColRow>
        </Grid>
        <Code>{codeString}</Code>
      </Box>
    )
  }
}
