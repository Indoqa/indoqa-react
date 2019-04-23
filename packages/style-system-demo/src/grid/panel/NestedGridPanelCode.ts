/* tslint:disable */
export default `const InnerGrid: React.FC = () => (
  <Grid spacing="0.5rem">
    <Row>
      <Panel><RedBox/></Panel>
      <Panel><RedBox/></Panel>
    </Row>
  </Grid>
)

<Grid spacing="0.5rem">
  <Row>
    <Panel><OrangeBox/></Panel>
    <Panel><OrangeBox/></Panel>
  </Row>
  <Row>
    <Panel><OrangeBox/></Panel>
    <Panel><YellowBox/></Panel>
    <Panel><YellowBox/></Panel>
    <Panel><OrangeBox/></Panel>
  </Row>
  <Row>
    <Panel><OrangeBox/></Panel>
    <Panel size={2}>
      <InnerGrid/>
    </Panel>
    <Panel><OrangeBox/></Panel>
  </Row>
  <Row>
    <Panel><OrangeBox/></Panel>
  </Row>
</Grid>
`
