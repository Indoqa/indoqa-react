import {Box, Grid, Panel, Row} from '@indoqa/style-system'
import * as React from 'react'
import Code from '../../code/Code'
import {BlueBox, OrangeBox} from '../Boxes'
import {codeString} from './ExplicitWidthGridPanelCode'

const ExplicitWidthGridPanel: React.FC = () => (
  <Box>
    <p>
      The first <code>Panel</code> has an explicit width of 300px. The width of the other <code>Panel</code>s is
      distributed evenly according to their size (default is 1).
    </p>
    <Grid spacing="0.5rem">
      <Row>
        <Panel width={300}>
          <BlueBox />
        </Panel>
        <Panel>
          <OrangeBox />
        </Panel>
        <Panel size={2}>
          <OrangeBox />
        </Panel>
        <Panel>
          <OrangeBox />
        </Panel>
      </Row>
    </Grid>
    <Code>{codeString}</Code>
  </Box>
)

export default ExplicitWidthGridPanel
