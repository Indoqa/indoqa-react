import {Box, Col, ColRow, Grid} from '@indoqa/style-system'
import * as React from 'react'

export default class GridSamples extends React.Component {

  public render() {
    const innerBox = (
      <Box bg="primary" fullWidth fullHeight style={{height: '29px'}}>
        foo
      </Box>
    )
    return (
      <Box>
        <h1>Grid page</h1>
        <Grid spacing="0.5rem">
          <ColRow>
            <Col size={4}>{innerBox}</Col>
            <Col size={4}>{innerBox}</Col>
            <Col size={4}>{innerBox}</Col>
            <Col size={6}>{innerBox}</Col>
            <Col size={2}>{innerBox}</Col>
            <Col size={2}>{innerBox}</Col>
            <Col size={2}>{innerBox}</Col>
          </ColRow>
          <ColRow>
            <Col size={6}>{innerBox}</Col>
            <Col size={5}>{innerBox}</Col>
            <Col size={2}>{innerBox}</Col>
          </ColRow>
          <ColRow>
            <Col size={6}>{innerBox}</Col>
            <Col size={4}>{innerBox}</Col>
            <Col size={2}>{innerBox}</Col>
            <Col size={4}>{innerBox}</Col>
            <Col size={7}>{innerBox}</Col>
            <Col size={1}>{innerBox}</Col>
            <Col size={1}>{innerBox}</Col>
          </ColRow>
        </Grid>
      </Box>
    )
  }
}
