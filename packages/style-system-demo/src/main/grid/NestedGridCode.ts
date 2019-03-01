/* tslint:disable */
export default `<Grid spacing="0.5rem">
  <ColRow>
    <Col size={9}>
      <Grid spacing="0.5rem">
        <ColRow>
          <Col size={4}><OrangeBox/></Col>
          <Col size={4}><OrangeBox/></Col>
          <Col size={4}><OrangeBox/></Col>
        </ColRow>
        <ColRow>
          <Col size={6}>
            <Grid spacing="0.5rem">
              <ColRow>
                <Col size={4}><YellowBox/></Col>
                <Col size={4}><YellowBox/></Col>
                <Col size={4}><YellowBox/></Col>
              </ColRow>
            </Grid>
          </Col>
          <Col size={6}><RedBox/></Col>
        </ColRow>
      </Grid>
    </Col>
    <Col size={3}>
      <BlueBox/>
    </Col>
  </ColRow>
</Grid>
`
