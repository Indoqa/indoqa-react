import {Flex} from '@indoqa/style-system'
import * as React from 'react'
import Code from '../code/Code'
import {BlueBox, YellowBox} from '../grid/Boxes'
import {sample1, sample2, sample3, sample4} from './FlexSamplesCode'

const FlexSamples: React.FC = () => (
  <>
    <h3>Flex - Column direction</h3>
    <Flex direction="column">
      <YellowBox height="50px" width="50px"/>
      <BlueBox height="50px" width="50px"/>
    </Flex>
    <Code initialShow showToggle={false}>{sample1}</Code>

    <h3>Flex - JustifyContent</h3>
    <Flex justifyContent="space-between" width="150px">
      <YellowBox height="50px" width="50px"/>
      <BlueBox height="50px" width="50px"/>
    </Flex>
    <Code initialShow showToggle={false}>{sample2}</Code>

    <h3>Flex box with a centered element containing an inline element</h3>
    <Flex center height="50px" bg="green">box5</Flex>
    <Code initialShow showToggle={false}>{sample3}</Code>

    <h3>Flex box containing a centered element with display set to block</h3>
    <Flex center height="100px" bg="red">
      <Flex center height="50px" width="100px" bg="yellow">box1</Flex>
    </Flex>
    <Code initialShow showToggle={false}>{sample4}</Code>
  </>
)

export default FlexSamples
