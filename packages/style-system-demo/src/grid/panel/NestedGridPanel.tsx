import {Box, Grid, Panel, Row} from '@indoqa/style-system'
import * as React from 'react'
import Code from '../../code/Code'
import {OrangeBox, RedBox, YellowBox} from '../Boxes'
import codeString from './NestedGridPanelCode'

const InnerGrid: React.FC = () => (
  <Grid spacing="0.5rem">
    <Row>
      <Panel><RedBox/></Panel>
      <Panel><RedBox/></Panel>
    </Row>
  </Grid>
)

const NestedGridPanel: React.FC = () => (
  <Box>
    <p>This sample shows a nested <code>Grid</code>.
    </p>
    <Grid spacing="0.5rem">
      <Row>
        <Panel><OrangeBox/></Panel>
        <Panel><OrangeBox/></Panel>
      </Row>
      <Row>
        <Panel><OrangeBox/></Panel>
        <Panel><YellowBox/></Panel>
        <Panel><YellowBox/></Panel>
        <Panel><OrangeBox/></Panel>
      </Row>
      <Row>
        <Panel><OrangeBox/></Panel>
        <Panel size={2}>
          <InnerGrid/>
        </Panel>
        <Panel><OrangeBox/></Panel>
      </Row>
      <Row>
        <Panel><OrangeBox/></Panel>
      </Row>
    </Grid>
    <Code>{codeString}</Code>
  </Box>
)

export default NestedGridPanel
