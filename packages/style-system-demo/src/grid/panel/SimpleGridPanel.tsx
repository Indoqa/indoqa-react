import {Box, Grid, Panel, Row} from '@indoqa/style-system'
import * as React from 'react'
import Code from '../../code/Code'
import {BlueBox, OrangeBox, YellowBox} from '../Boxes'
import {codeString} from './SimpleGridPanelCode'

const SimpleGridPanel: React.FC = () => (
  <Box>
    <p>
      This sample shows a <code>Grid</code> with three rows, each containing <code>Panel</code>s. For tablet screens (or
      larger) each panel gets its share from the row width. The size can be used to get a bigger share.
      <br />
    </p>
    <Grid spacing="0.5rem">
      <Row>
        <Panel>
          <OrangeBox />
        </Panel>
        <Panel>
          <OrangeBox />
        </Panel>
      </Row>
      <Row>
        <Panel>
          <OrangeBox />
        </Panel>
        <Panel>
          <YellowBox />
        </Panel>
        <Panel>
          <YellowBox />
        </Panel>
        <Panel>
          <OrangeBox />
        </Panel>
      </Row>
      <Row>
        <Panel>
          <OrangeBox />
        </Panel>
        <Panel size={2}>
          <BlueBox />
        </Panel>
        <Panel>
          <OrangeBox />
        </Panel>
      </Row>
      <Row>
        <Panel>
          <OrangeBox />
        </Panel>
      </Row>
    </Grid>
    <Code>{codeString}</Code>
  </Box>
)

export default SimpleGridPanel
