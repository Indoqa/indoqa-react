/* tslint:disable */
export default `const InnerGrid1: React.FC = () => (
  <Grid spacing="0.5rem">
    <ColRow>
      <Col size={4}><YellowBox/></Col>
      <Col size={4}><YellowBox/></Col>
      <Col size={4}><YellowBox/></Col>
    </ColRow>
    <ColRow>
      <Col size={4}><YellowBox/></Col>
      <Col size={4}><YellowBox/></Col>
      <Col size={4}><YellowBox/></Col>
    </ColRow>
  </Grid>
)

const InnerGrid2: React.FC = () => (
  <Grid spacing="0.5rem">
    <ColRow>
      <Col size={4}><OrangeBox/></Col>
      <Col size={4}><OrangeBox/></Col>
      <Col size={4}><OrangeBox/></Col>
    </ColRow>
    <ColRow>
      <Col size={6}>
        <InnerGrid1/>
      </Col>
      <Col size={6}><RedBox/></Col>
    </ColRow>
  </Grid>
)

const NestedGridCol: React.FC = () => {
  return (
    <Box>
      <p>This sample shows three nested <code>Grid</code>s:</p>
      <Grid spacing="0.5rem">
        <ColRow>
          <Col size={9}>
            <InnerGrid2/>
          </Col>
          <Col size={3}>
            <BlueBox/>
          </Col>
        </ColRow>
      </Grid>
      <Code>{codeString}</Code>
    </Box>
  )
}
`
