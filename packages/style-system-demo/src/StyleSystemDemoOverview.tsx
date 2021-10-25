import {Col, ColRow, Grid} from '@indoqa/style-system'
import * as React from 'react'
import {BlueBox, BlueFlexBox, OrangeBox} from './grid/Boxes'

const StyleSystemDemoOverview: React.FC = () => {
  return (
    <>
      <p>
        The Indoqa Style-System provides provides a typed theming system and comes with the fundamental building block
        <code>Box</code>, <code>Flex</code>, <code>Text</code>, <code>Stack/VStack/HStack</code> and <code>Grid</code>.
      </p>
      <Grid spacing="1.5rem" mt={3}>
        <ColRow>
          <Col size={[12, 12, 6]}>
            <p>
              <code>Box</code> and <code>Flex</code>
            </p>
            <BlueFlexBox>
              <OrangeBox width="calc(75px - 1rem)" height="calc(75px - 1rem)" />
              <OrangeBox width="calc(75px - 1rem)" height="calc(75px - 1rem)" />
              <OrangeBox width="calc(75px - 1rem)" height="calc(75px - 1rem)" />
              <OrangeBox width="calc(75px - 1rem)" height="calc(75px - 1rem)" />
              <OrangeBox width="calc(75px - 1rem)" height="calc(75px - 1rem)" />
            </BlueFlexBox>
          </Col>
          <Col size={[12, 12, 6]}>
            <p>
              <code>Grid</code>
            </p>
            <Grid spacing="0.5rem">
              <ColRow>
                <Col size={4}>
                  <OrangeBox />
                </Col>
                <Col size={4}>
                  <OrangeBox />
                </Col>
                <Col size={4}>
                  <OrangeBox />
                </Col>
              </ColRow>
              <ColRow>
                <Col size={6}>
                  <BlueBox />
                </Col>
                <Col size={4}>
                  <BlueBox />
                </Col>
                <Col size={2}>
                  <BlueBox />
                </Col>
              </ColRow>
            </Grid>
          </Col>
        </ColRow>
      </Grid>
    </>
  )
}

export default StyleSystemDemoOverview
