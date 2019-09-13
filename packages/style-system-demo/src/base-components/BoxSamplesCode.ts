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

export const sample5 = `<Box<Theme> p={[2, 0]} bg="primary">
  <Box<Theme> bg="accent" p={1} mb={2}>innerBox1</Box>
  <Box<Theme> bg="green" p={1}>innerBox2</Box>
</Box>`

export const sample6 = `<Box testId="box11" shadow="elevation5" r={5} p={3} mb={3}>
  <Text>A rounded box with a shadow</Text>
</Box>`
