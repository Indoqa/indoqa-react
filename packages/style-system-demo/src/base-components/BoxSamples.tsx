import {Box} from '@indoqa/style-system'
import * as React from 'react'
import {Theme} from '../app/theme'
import Code from '../code/Code'
import {sample1, sample2, sample3, sample4, sample5} from './BoxSamplesCode'

const BoxSamples: React.FC = () => (
  <>
    <h3>Box with margin, padding and background color</h3>
    <Box<Theme> my={2} p={2} bg="primary">Box1</Box>
    <Box<Theme> my={2} p={2} bg="accent" fontStyle="mono" italic>Box2</Box>
    <Code initialShow showToggle={false}>{sample1}</Code>

    <h3>Box with onClick event</h3>
    <Box<Theme> my={2} p={2} bg="primary" htmlAttrs={{onClick: () => alert('Box3 clicked')}}>Box3</Box>
    <Code initialShow showToggle={false}>{sample2}</Code>

    <h3>Nested boxes</h3>
    <Box<Theme> my={2} px={2} bg="primary">
      <Box<Theme> bg="accent" mb={1} p={1}>innerBox1</Box>
      <Box<Theme> bg="green" p={1}>innerBox2</Box>
    </Box>
    <Code initialShow showToggle={false}>{sample3}</Code>

    <h3>Multiple styled box</h3>
    <Box<Theme> my={2} p={2} style={[{color: 'white'}, {backgroundColor: 'green'}]}>box4</Box>
    <Code initialShow showToggle={false}>{sample4}</Code>

    <h3>Responsive styling</h3>
    <Box<Theme> p={[2, 0]} bg="primary">
      <Box<Theme> bg="accent" p={1} mb={2}>innerBox1</Box>
      <Box<Theme> bg="green" p={1}>innerBox2</Box>
    </Box>
    <Code initialShow showToggle={false}>{sample5}</Code>
  </>
)

export default BoxSamples
