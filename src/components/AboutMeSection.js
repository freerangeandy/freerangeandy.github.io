import React from 'react'
import {
  Container,
  Icon,
  List,
  Grid,
  Segment
} from 'semantic-ui-react'

const AboutMeSection = (props) => {
  const skillsList = (
    <List bulleted style={{ textAlign:'left'}}>
      <List.Item>JavaScript</List.Item>
      <List.Item>ReactJS</List.Item>
      <List.Item>Ruby&nbsp;on&nbsp;Rails</List.Item>
      <List.Item>Python</List.Item>
    </List>
  )

  const interestsList = (
    <List style={{ textAlign:'left'}}>
      <List.Item>
        <Icon link name='lab' />
        <List.Content>&nbsp;STEM&nbsp;Education</List.Content>
      </List.Item>
      <List.Item>
        <Icon link name='leaf' />
        <List.Content>Sustainable&nbsp;Tech</List.Content>
      </List.Item>
      <List.Item>
        <Icon link name='subway' />
        <List.Content>&nbsp;Public&nbsp;Policy</List.Content>
      </List.Item>
    </List>
  )

  return (
    <Container textAlign='center'>
      <h1 style={{ marginBottom:'0' }}>Andy Lee</h1>
      <List inverted link horizontal>
        <List.Item as='a' href="https://www.linkedin.com/in/andrew-lee-1701d/" target='#'>
          <Icon name='linkedin' /> LinkedIn
        </List.Item>
        <List.Item as='a' href="https://www.github.com/freerangeandy" target='#'>
          <Icon name='github' /> GitHub
        </List.Item>
      </List>
      <p style={{ marginTop:'0.5em' }}>
        Experienced programmer &nbsp;&nbsp;<Icon name='cog' />&nbsp; Math educator &nbsp;&nbsp;<Icon name='cog' />&nbsp; Boot camp graduate<br/>
        Currently looking for a role as a <i>full-stack</i> or <i>front-end software developer</i>
      </p>
      <Grid centered relaxed>
        <Grid.Row>
          <Grid.Column only="computer" width={1}></Grid.Column>
          <Grid.Column only="largeScreen" width={1}></Grid.Column>
          <Grid.Column only="tablet computer" width={4}>
            <Segment
              inverted
              color='violet'
              style={{ }}
            >
              <Container>
                <h3>Skills</h3>
                {skillsList}
              </Container>
            </Segment>
          </Grid.Column>
          <Grid.Column only="tablet computer" width={4}>
            <Segment
              inverted
              color='violet'
            >
              <h3>Interests</h3>
              {interestsList}
            </Segment>
          </Grid.Column>
          <Grid.Column only="mobile" width={6}>
            <Segment
              inverted
              color='violet'
              style={{ display:"flex", justifyContent:"flex-end" }}
            >
              <Container>
                <h3>Skills</h3>
                {skillsList}
              </Container>
            </Segment>
          </Grid.Column>
          <Grid.Column only="mobile" width={7}>
            <Segment
              inverted
              color='violet'
            >
              <h3>Interests</h3>
              {interestsList}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}
export default AboutMeSection
