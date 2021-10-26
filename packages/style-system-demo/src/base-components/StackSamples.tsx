import {Box, Flex, HStack, Stack, StackDirection, Text, VStack} from '@indoqa/style-system'
import Code from '../code/Code'
import {sample1, sample2, sample3, sample4, sample5, sample6, sample7, sample8, sample9} from './StackSamplesCode'

export const StackSamples = () => {
  return (
    <>
      <Box mb={6}>
        <h1>Stack</h1>
        <p>
          Stacks help you easily create flexible and automatically distributed layouts You can stack elements in the
          horizontal or vertical direction, and apply a space or/and divider between each element. It uses `display:
          flex` internally and renders a `div`.
        </p>
      </Box>
      <Box mb={6}>
        <h3>HStack (block elements)</h3>
        <Box bg="blue">
          <HStack spacing={2}>
            <Flex center width={40} height={40} bg="yellow">
              1
            </Flex>
            <Flex center width={40} height={40} bg="yellow">
              2
            </Flex>
          </HStack>
        </Box>
        <Code initialShow>{sample1}</Code>
      </Box>
      <Box mb={6}>
        <h3>HStack (block elements with divider)</h3>
        <Box bg="blue">
          <HStack spacing={2} divider={<Box fullHeight style={{borderRight: '1px solid yellow', height: 'auto'}} />}>
            <Flex center width={40} height={40} bg="yellow">
              1
            </Flex>
            <Flex center width={40} height={40} bg="yellow">
              2
            </Flex>
          </HStack>
        </Box>
        <Code initialShow>{sample2}</Code>
      </Box>
      <Box mb={6}>
        <h3>HStack (inline elements)</h3>
        <Box bg="blue">
          <HStack spacing={2}>
            <Text color="yellow">1</Text>
            <Text color="yellow">2</Text>
          </HStack>
        </Box>
        <Code initialShow>{sample3}</Code>
      </Box>
      <Box mb={6}>
        <h3>HStack (inline elements with divider)</h3>
        <Box bg="blue">
          <HStack spacing={1} divider={<Text color="yellow">|</Text>}>
            <Text color="yellow">1</Text>
            <Text color="yellow">2</Text>
          </HStack>
        </Box>
        <Code initialShow>{sample4}</Code>
      </Box>
      <Box mb={6}>
        <h3>VStack (block elements)</h3>
        <Box bg="blue">
          <div>
            <VStack spacing={2}>
              <Flex center width={40} height={40} bg="yellow">
                1
              </Flex>
              <Flex center width={40} height={40} bg="yellow">
                2
              </Flex>
            </VStack>
          </div>
        </Box>
        <Code initialShow>{sample5}</Code>
      </Box>
      <Box mb={6}>
        <h3>VStack (block elements with divider)</h3>
        <Box bg="blue">
          <div>
            <VStack spacing={2} divider={<Box style={{borderTop: '1px solid yellow'}} />}>
              <Flex center width={40} height={40} bg="yellow">
                1
              </Flex>
              <Flex center width={40} height={40} bg="yellow">
                2
              </Flex>
            </VStack>
          </div>
        </Box>
        <Code initialShow>{sample6}</Code>
      </Box>
      <Box mb={6}>
        <h3>VStack (inline elements)</h3>
        <Box bg="blue">
          <div>
            <VStack spacing={2}>
              <Text color="yellow">1</Text>
              <Text color="yellow">2</Text>
            </VStack>
          </div>
        </Box>
        <Code initialShow>{sample7}</Code>
      </Box>
      <Box mb={6}>
        <h3>Responsive stack (mobile=VStack, tablet=HStack)</h3>
        <Box bg="blue">
          <div>
            <Stack spacing={[1, 8]} stackDirection={[StackDirection.VERTICAL, StackDirection.HORIZONTAL]}>
              <Flex center width={40} height={40} bg="yellow">
                1
              </Flex>
              <Flex center width={40} height={40} bg="yellow">
                2
              </Flex>
            </Stack>
          </div>
        </Box>
        <Code initialShow>{sample8}</Code>
      </Box>
      <Box mb={6}>
        <h3>VStack (block elements, alignItems=center, justifyContent=center)</h3>
        <Box bg="blue" height={150}>
          <VStack spacing={2} alignItems="center" justifyContent="center">
            <Flex center width={40} height={40} bg="yellow">
              1
            </Flex>
            <Flex center width={40} height={40} bg="yellow">
              2
            </Flex>
          </VStack>
        </Box>
        <Code initialShow>{sample9}</Code>
      </Box>
    </>
  )
}
