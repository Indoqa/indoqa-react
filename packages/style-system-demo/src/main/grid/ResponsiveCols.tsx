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
          <Col size={[6, 3]}>{innerBox}</Col>
          <Col size={[6, 3]}>{innerBox}</Col>
          <Col size={[6, 3]}>{innerBox}</Col>
          <Col size={[6, 3]}>{innerBox}</Col>
        </ColRow>
        <ColRow>
          <Col size={[12, 8, 4]}>{innerBox}</Col>
        </ColRow>
        <ColRow>
          <Col size={[12, 12, 6, 3]} style={{color: 'red'}}>a</Col>
        </ColRow>

      </Grid>
    </Box>
  )
}

export default ResponsiveCols
