import {Box, Col, ColRow, Grid} from '@indoqa/style-system'
import * as React from 'react'
import Code from '../../code/Code'
import {OrangeBox, YellowBox} from '../Boxes'
import {codeString} from './ResponsiveGridColCode'

const ResponsiveGridCol: React.FC = () => (
  <Box>
    <p>
      This sample shows a responsive <code>Grid</code>.
    </p>
    <Grid spacing="0.5rem">
      <ColRow>
        <Col size={[6, 4, 3, 2]} testId="col1">
          <OrangeBox />
        </Col>
        <Col size={[6, 4, 3, 2]} testId="col2">
          <YellowBox />
        </Col>
        <Col size={[6, 4, 3, 2]} testId="col3">
          <OrangeBox />
        </Col>
        <Col size={[6, 4, 3, 2]} testId="col4">
          <YellowBox />
        </Col>
        <Col size={[6, 4, 3, 2]} testId="col5">
          <OrangeBox />
        </Col>
        <Col size={[6, 4, 3, 2]} testId="col6">
          <YellowBox />
        </Col>
      </ColRow>
    </Grid>
    <Code>{codeString}</Code>
  </Box>
)

export default ResponsiveGridCol
