import {Box, Text} from '@indoqa/style-system'
import * as React from 'react'
import {Theme} from '../app/theme'
import Code from '../code/Code'
import {sample1, sample2, sample3, sample4, sample5, sample6, sample7, sample8} from './BoxSamplesCode'

const BoxSamples: React.FC = () => {
  return (
    <>
      <h3>Box with margin, padding and background color</h3>
      <Box<Theme> my={2} p={2} bg="primary" testId="box1" onClick={(e) => alert(e.clientX)}>
        Box1
      </Box>
      <Box<Theme> my={2} p={2} bg="accent" fontStyle="mono" italic testId="box2">
        Box2
      </Box>
      <Code initialShow showToggle={false}>
        {sample1}
      </Code>

      <h3>Box with onClick event</h3>
      <Box<Theme> my={2} p={2} bg="primary" onClick={() => alert('Box3 clicked')} testId="box3">
        Box3
      </Box>
      <Code initialShow showToggle={false}>
        {sample2}
      </Code>

      <h3>Nested boxes</h3>
      <Box<Theme> my={2} px={2} bg="primary" testId="box4">
        <Box<Theme> bg="accent" mb={1} p={1} testId="box5">
          innerBox1
        </Box>
        <Box<Theme> bg="green" p={1} testId="box6">
          innerBox2
        </Box>
      </Box>
      <Code initialShow showToggle={false}>
        {sample3}
      </Code>

      <h3>Multiple styled box</h3>
      <Box<Theme> my={2} p={2} style={[{color: 'white'}, {backgroundColor: 'green'}]} testId="box7">
        box4
      </Box>
      <Code initialShow showToggle={false}>
        {sample4}
      </Code>

      <h3>Responsive styling</h3>
      <Box<Theme> p={[2, 0]} bg="primary" testId="box8">
        <Box<Theme> bg="accent" mr={[1, 2, 3]} ml={2} mb={2} height={[50, 60]} testId="box9">
          innerBox1
        </Box>
        <Box<Theme> bg="green" mr={[1, 2, 3]} ml={2} testId="box10">
          innerBox2
        </Box>
      </Box>
      <Code initialShow showToggle={false}>
        {sample5}
      </Code>

      <h3>Shadows and radius</h3>
      <Box testId="box11" shadow="elevation5" r={5} p={3} mb={3}>
        <Text>A rounded box with a shadow</Text>
      </Box>
      <Code initialShow showToggle={false}>
        {sample6}
      </Code>

      <h3>Display</h3>
      <Box testId="box12" bg="accent" display={['none', 'block']} p={2}>
        Box only visible on tablets or larger screens.
      </Box>
      <Box testId="box13" bg="green" display={['block', 'none']} p={2}>
        Box only visible on mobile screens.
      </Box>
      <Code initialShow showToggle={false}>
        {sample7}
      </Code>

      <h3>Line clamp</h3>
      <Box testId="box14" bg="accent" width={200} lineClamp={[2, 3, 4]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Box>
      <Box testId="box15" bg="accent" width={200} lineClamp mt={1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Box>
      <Code initialShow showToggle={false}>
        {sample8}
      </Code>
    </>
  )
}

export default BoxSamples
