import {Box, Col, ColRow, Grid} from '@indoqa/style-system'
import * as React from 'react'
import Code from '../../code/Code'
import {OrangeBox, YellowBox} from '../Boxes'
import codeString from './SimpleGridColCode'

const ResponsiveGridCol: React.FC = () => (
  <Box>
    <p>This sample shows a responsive <code>Grid</code>.
    </p>
    <Grid spacing="0.5rem">
      <ColRow>
        <Col size={[6, 4, 2]} dataTest="col1"><OrangeBox/></Col>
        <Col size={[6, 4, 2]} dataTest="col2"><YellowBox/></Col>
        <Col size={[6, 4, 2]} dataTest="col3"><OrangeBox/></Col>
        <Col size={[6, 4, 2]} dataTest="col4"><YellowBox/></Col>
        <Col size={[6, 4, 2]} dataTest="col5"><OrangeBox/></Col>
        <Col size={[6, 4, 2]} dataTest="col6"><YellowBox/></Col>
      </ColRow>
    </Grid>
    <Code>{codeString}</Code>
  </Box>
)

export default ResponsiveGridCol