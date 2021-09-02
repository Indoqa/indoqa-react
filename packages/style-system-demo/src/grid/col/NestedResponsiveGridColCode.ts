/* tslint:disable */
export const codeString = `const InnerGrid1: React.FC = () => (
  <Grid spacing="0.5rem">
    <ColRow>
      <Col size={[6, 3]}><OrangeBox/></Col>
      <Col size={[6, 3]}><OrangeBox/></Col>
      <Col size={[6, 3]}><OrangeBox/></Col>
      <Col size={[6, 3]}><OrangeBox/></Col>
    </ColRow>
    <ColRow>
      <Col size={[6, 3]}><OrangeBox/></Col>
      <Col size={[6, 3]}><OrangeBox/></Col>
      <Col size={[6, 3]}><OrangeBox/></Col>
      <Col size={[6, 3]}><OrangeBox/></Col>
    </ColRow>
  </Grid>
)

const InnerGrid2: React.FC = () => (
  <Grid spacing="0.5rem">
    <ColRow>
      <Col size={4}><YellowBox/></Col>
      <Col size={4}><YellowBox/></Col>
      <Col size={4}><YellowBox/></Col>
    </ColRow>
  </Grid>
)

<Grid spacing="0.5rem">
  <ColRow>
    <Col size={[12, 12, 6]}>
      <InnerGrid1/>
    </Col>
    <Col size={[12, 12, 6]}>
      <InnerGrid2/>
    </Col>
  </ColRow>
  <ColRow>
    <Col>
      <BlueBox/>
    </Col>
  </ColRow>
</Grid>
`
