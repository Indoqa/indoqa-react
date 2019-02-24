import {Box, Col, ColRow, Grid} from '@indoqa/style-system'
import * as React from 'react'

const innerBox = (
  <Box bg="primary" fullWidth fullHeight style={{height: '100px'}}/>
)

const ResponsiveCols: React.FC = () => {
  return (
    <Box>
      <Grid spacing="0.5rem">
        <ColRow>
          <Col size={4}>{innerBox}</Col>
          <Col size={4}>{innerBox}</Col>
          <Col size={4}>{innerBox}</Col>
        </ColRow>
        <ColRow>
          <Col>{innerBox}</Col>
        </ColRow>
        <ColRow>
          <Col size={[12, 2]}>{innerBox}</Col>
        </ColRow>
      </Grid>
    </Box>
  )
}

export default ResponsiveCols
