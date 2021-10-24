import {Box, Flex, HStack, Stack, StackDirection, Text, VStack} from '@indoqa/style-system'

export const StackSamples = () => {
  return (
    <>
      <Box mb={4}>
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
      </Box>
      <Box mb={4}>
        <h3>HStack (inline elements)</h3>
        <Box bg="blue">
          <HStack spacing={2}>
            <Text color="yellow">1</Text>
            <Text color="yellow">2</Text>
          </HStack>
        </Box>
      </Box>
      <Box mb={4}>
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
      </Box>
      <Box mb={4}>
        <h3>VStack (inline elements)</h3>
        <Box bg="blue">
          <div>
            <VStack spacing={2}>
              <Text color="yellow">1</Text>
              <Text color="yellow">2</Text>
            </VStack>
          </div>
        </Box>
      </Box>
      <Box mb={4}>
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
      </Box>
    </>
  )
}
