export const sample1 = `<Box<Theme> my={2} p={2} bg="primary">Box1</Box>
<Box<Theme> my={2} p={2} bg="accent" fontStyle="mono" italic>Box2</Box>
`
export const sample2 = '<Box<Theme> my={2} p={2} bg="primary" onClick={() => alert(\'Box3 clicked\')} testId="box3">Box3</Box>'

export const sample3 = `<Box<Theme> my={2} px={2} bg="primary">
  <Box<Theme> bg="accent" mb={1} p={1}>innerBox1</Box>
  <Box<Theme> bg="green" p={1}>innerBox2</Box>
</Box>
`
export const sample4 = `<Box<Theme> my={2} p={2} style={[{color: 'white'}, {backgroundColor: 'green'}]}>box4</Box>`

export const sample5 = `<Box<Theme> p={[2, 0]} bg="primary" testId="box8">
  <Box<Theme> bg="accent" mr={[1, 2, 3]} mb={2} height={[50, 60]} testId="box9">innerBox1</Box>
  <Box<Theme> bg="green" mr={[1, 2, 3]} testId="box10">innerBox2</Box>
</Box>`

export const sample6 = `<Box testId="box11" shadow="elevation5" r={5} p={3} mb={3}>
  <Text>A rounded box with a shadow</Text>
</Box>`

export const sample7 = `<Box testId="box12" bg="accent" display={['none', 'block']} p={2}>
  Box only visible on tablets or larger screens.
</Box>
<Box testId="box12" bg="green" display={['block', 'none']} p={2}>
  Box only visible on mobile screens.
</Box>`

export const sample8 = `<Box testId="box14" bg="accent" width={200} lineClamp={2}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Box>
<Box testId="box15" bg="accent" width={200} lineClamp mt={1}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Box>`
