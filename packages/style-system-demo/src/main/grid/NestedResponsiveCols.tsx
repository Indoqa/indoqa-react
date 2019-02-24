import {Box, Col, ColRow, Grid} from '@indoqa/style-system'
import * as React from 'react'

const BoxFirstRow: React.FC = ({children}) => (
  <Box bg="accent" p={1} fullWidth fullHeight style={{height: '100px'}}>{children}</Box>
)

const BoxSecondRow: React.FC = ({children}) => (
  <Box bg="primaryLight" p={1} fullWidth fullHeight style={{height: '100px'}}>{children}</Box>
)

const BoxThirdRow: React.FC = ({children}) => (
  <Box bg="primary" p={1} fullWidth fullHeight style={{height: '100px'}}>{children}</Box>
)

const NestedResponsiveCols: React.FC = () => {
  return (
    <Box>
      <Grid spacing="0.5rem">
        <ColRow>
          <Col size={[12, 12, 6]}>
            <Grid spacing="0.5rem">
              <ColRow>
                <Col size={[6, 3]}><BoxFirstRow>innerGrid:[12,12,6] | col:[6,3]</BoxFirstRow></Col>
                <Col size={[6, 3]}><BoxFirstRow>innerGrid:[12,12,6] | col:[6,3]</BoxFirstRow></Col>
                <Col size={[6, 3]}><BoxFirstRow>innerGrid:[12,12,6] | col:[6,3]</BoxFirstRow></Col>
                <Col size={[6, 3]}><BoxFirstRow>innerGrid:[12,12,6] | col:[6,3]</BoxFirstRow></Col>
              </ColRow>
            </Grid>
          </Col>
          <Col size={[12, 12, 6]}>
            <Grid spacing="0.5rem">
              <ColRow>
                <Col size={4}><BoxSecondRow>innerGrid:[12,12,6] | col:4</BoxSecondRow></Col>
                <Col size={4}><BoxSecondRow>innerGrid:[12,12,6] | col:4</BoxSecondRow></Col>
                <Col size={4}><BoxSecondRow>innerGrid:[12,12,6] | col:4</BoxSecondRow></Col>
              </ColRow>
            </Grid>
          </Col>
        </ColRow>
        <ColRow>
          <Col><BoxThirdRow>col:default(12)</BoxThirdRow></Col>
        </ColRow>
      </Grid>
    </Box>
  )
}

export default NestedResponsiveCols
